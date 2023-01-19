<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $rows_per_page = $request->get('rows_per_page') ? $request->get('rows_per_page') : 1000;

        $user = QueryBuilder::for(User::class)
                ->allowedFilters([
                    AllowedFilter::exact('id'),
                    'first_name',
                    'middle_name',
                    'family_name',
                    AllowedFilter::exact('type'),
                    AllowedFilter::exact('gender'),
                    AllowedFilter::exact('user_agreement'),
                    AllowedFilter::exact('privacy_policy'),
                    'address',
                    'mobile_number',
                    'email',
                    AllowedFilter::exact('active'),
                ])
                ->allowedSorts([
                    'id',
                    'first_name',
                    'middle_name',
                    'family_name',
                    'type',
                    'gender',
                    'user_agreement',
                    'privacy_policy',
                    'address',
                    'active',
                    'mobile_number',
                    'birthdate',
                ])
                ->paginate($rows_per_page);

        if ($user) {
            return UserResource::collection($user);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {

        $user                       = new User;
        $user->first_name           = $request->input('first_name');
        $user->middle_name          = $request->input('middle_name');
        $user->family_name          = $request->input('family_name');
        $user->type                 = $request->input('type');
        $user->email                = $request->input('email');
        $user->email_verified_at    = $request->input('email_verified_at');
        $user->password             = $request->input('password');
        $user->photo                = ($request->hasfile('photo') ? $request->file('photo')->store('public/uploads') : NULL);
        $user->gender               = $request->input('gender');
        $user->user_agreement       = $request->input('user_agreement');
        $user->privacy_policy       = $request->input('privacy_policy');

        
        
        $user->address              = $request->input('address');
        $user->mobile_number       = $request->input('mobile_number');
        $user->birthdate             = $request->input('birthdate');
        $user->active               = $request->input('active') ? $request->input('active') : 1;

        if ($user->save()) {
            UserResource::withoutWrapping();
            $userResource = new UserResource($user);

            return response()->json($userResource, 201);
        }      
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(Int $id)
    {
        $user = User::find($id);

        if ($user) {
            UserResource::withoutWrapping();
            $userResource = new UserResource($user);

            return response()->json($userResource, 200);   
        } else {
            return response()->json(
                [
                    'errors' => [
                        'message' => [
                            'User ID '.$id.' not found.'
                        ]
                    ]
                ],
                404
            );    
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, Int $id)
    {
        $user = User::find($id);

        if ($user) {
            if ($request->has('first_name')) {
                $user->first_name    = $request->get('first_name');
            }

            if ($request->has('middle_name')) {
                $user->middle_name   = $request->get('middle_name');
            }

            if ($request->has('family_name')) {
                $user->family_name     = $request->get('family_name');
            }

            if ($request->has('type')) {
                $user->type   = $request->get('type');
            }

            if ($request->has('email')) {
                $user->email   = $request->get('email');
            }
            
            if ($request->hasfile('photo')) {
                // Remove the old image if any
                if ($user->photo && Storage::exists($user->photo)) {
                    Storage::delete($user->photo);
                }

                $user->photo = $request->file('photo')->store('public/uploads');
            }

            if ($request->has('gender')) {
                $user->gender   = $request->get('gender');
            }
            
            if ($request->has('address')) {
                $user->address   = $request->get('address');
            }

            if ($request->has('mobile_number')) {
                $user->mobile_number   = $request->get('mobile_number');
            };

            if ($request->has('birthdate')) {
                $user->birthdate   = $request->get('birthdate');
            }

            if ($request->has('active')) {
                $user->active   = $request->get('active');
            }

            if ($user->save()) {
                UserResource::withoutWrapping();
                $userResource = new UserResource($user);

                return response()->json($userResource, 200);
            } else {
                return response()->json(
                    [
                        'errors' => [
                            'message' => [
                                'Unable to edit User ID '.$id
                            ]
                        ]
                    ],
                    422
                );    
            }
        } else {
            return response()->json(
                [
                    'errors' => [
                        'message' => [
                            'User ID '.$id.' not found.'
                        ]
                    ]
                ],
                404
            );    
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        User::destroy($id);
        
        return response()->json(null, 204);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        $token->save();

        $info = User::where('email', $request->input('email'))->first();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'user' => $info
        ]);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function change_password(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $credentials = request(['email', 'password']);
        
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);


        $user = User::where('email', $request->email)
                    ->update(['password' => $request->get('new_password')]);

        if ($user) {
            return response()->json([
                'email' => $request->email,
                'password_changed' => 1
            ]);            
        }
    }

}
