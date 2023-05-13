<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\RegisterOTPRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Http\Resources\User\RequestRescueLogResource;
use App\Http\Traits\SMSHandler;
use App\Models\Blowbagets;
use App\Models\Media;
use App\Models\Message;
use App\Models\RequestRescueLog;
use App\Models\User;
use App\Models\Vehicle\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    use SMSHandler;
    //
    public function loginRequestOtp(Request $request)
    {
        $request->validate([
            'email' => ['required', 'exists:users,email'],
            'password' => ['required']
        ]);

        $user = User::where('email', $request->input('email'))->first();
        if (!$user) {
            throw ValidationException::withMessages(['email' => ['Invalid email or password.']]);
        }
        if (Hash::check($request->input('password'), $user->password)) {
            // Request OTP
            $message = Message::where('recipient', 'like', '%' . $user->mobile_number . '%')
                ->where('created_at', '>=', now()->subMinutes(5))
                ->where('status', true)
                ->first();
            // Check if message exists
            if (!$message) {
                if ($user->mobile_number != '') {
                    $message = $this->sendCode($user->mobile_number);
                    return response("OTP sent successfully", 201);
                }
            } else {
                throw ValidationException::withMessages(['otp' => 'Kindly wait for 5 minute and try again later']);
            }
        }
        return response("Authentication failed.", '401');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'exists:users,email'],
            'password' => ['required'],
            // 'otp' => ['required']
        ]);
        $user = User::where('email', $request->input('email'))->first();
        if (!$user) {
            throw ValidationException::withMessages(['email' => ['Invalid email or password.']]);
        }
        if (Hash::check($request->input('password'), $user->password)) {
            // $message = Message::where('recipient', 'like', '%' . $user->mobile_number . '%')
            //     ->where('created_at', '>=', now()->subMinutes(5))
            //     ->where('status', true)
            //     ->first();
            // if ($message) {
            //     if ((string) $request->input('otp', $message->code) == $message->code) {
                    $token = $user->createToken('dryver');
                    // $message->update(['status' => false]);
                    $user['token'] = $token->plainTextToken;
                    return json_encode($user);
            //     } else {
            //         throw ValidationException::withMessages(['otp' => 'Invalid Verification Code.']);
            //     }
            // } else {
            //     throw ValidationException::withMessages(['otp' => 'Verification code expired. Kindly resend for new verification code.']);
            // }
        }
        return response("Authentication failed.", '401');
    }

    public function registerRequestOtp(RegisterOTPRequest $request)
    {
        $mobile_number = $request->input('mobile_number');
        $message = Message::where('recipient', 'like', '%' . $mobile_number . '%')
            ->where('created_at', '>=', now()->subMinutes(5))
            ->where('status', true)
            ->first();
        // Check if message exists
        if (!$message) {
            if ($mobile_number != '') {
                $message = $this->sendCode($mobile_number);
                return response("OTP sent successfully", 201);
            }
        } else {
            throw ValidationException::withMessages(['otp' => 'Kindly wait for 5 minute and try again later']);
        }
    }


    public function register(RegisterRequest $request)
    {
        $mobile_number = $request->input('mobile_number');
        $message = Message::where('recipient', 'like', '%' . $mobile_number . '%')
            ->where('created_at', '>=', now()->subMinutes(5))
            ->where('status', true)
            ->first();
        if ($message) {
            if ((string) $request->input('otp', $message->code) == $message->code) {
                $user = User::create(array_merge($request->validated(), ['password' => bcrypt($request->input('password'))]));
                $token = $user->createToken('dryver');
                $user->syncRoles([$request->input('role')]);
                $user['token'] = $token->plainTextToken;
                $message->update(['status' => false]);


                 //Upload Profile Photo
                if (isset($request->input('profile_photo', [])['id'])) {
                    Media::where('id', $request->input('profile_photo', [])['id'])
                        ->update([
                            'model_id' => $user->id
                        ]);
                }

                
                 //Upload Profile Photo
                 if (isset($request->input('license_front', [])['id'])) {
                    Media::where('id', $request->input('license_front', [])['id'])
                        ->update([
                            'model_id' => $user->id
                        ]);
                }

                 //Upload Profile Photo
                 if (isset($request->input('license_back', [])['id'])) {
                    Media::where('id', $request->input('license_back', [])['id'])
                        ->update([
                            'model_id' => $user->id
                        ]);
                }

                return json_encode($user);
            } else {
                throw ValidationException::withMessages(['otp' => 'Invalid Verification Code.']);
            }
        } else {
            throw ValidationException::withMessages(['otp' => 'Verification code expired. Kindly resend for new verification code.']);
        }
    }

    public function myRescueRequest()
    {
        $rescueRequests  = RequestRescueLog::with(['rescuer'])->where('user_id', auth()->user()->id)
            ->get();
        return RequestRescueLogResource::collection($rescueRequests);
    }

    public function myActiveVehicle() {

        $activeVehicle = Vehicle::where('assigned_to', auth()->user()->id)
            ->with('blowbagets')
            ->where('is_driving', true)
            ->first();
        
        return new RequestRescueLogResource($activeVehicle);
    }

    public function myInformation(){
        return auth()->user();
    }

    public function updateProfilePhoto(Request $request)
    {
        $data = User::find(auth()->user()->id);
        
        if (isset($request->input('profile_photo', [])['id'])) {
            if ($request->input('profile_photo', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('profile_photo');
            }
            Media::where('id', $request->input('profile_photo', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        } else {
            $data->clearMediaCollection('profile_photo');
        }
    }
}
