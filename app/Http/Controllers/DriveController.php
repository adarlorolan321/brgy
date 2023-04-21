<?php

namespace App\Http\Controllers;

use App\Http\Requests\Drive\RequestRescuerRequest;
use App\Http\Requests\Drive\StartDriveRequest;
use App\Http\Requests\Drive\StopDriveRequest;
use App\Http\Resources\Vehicle\VehicleListResource;
use App\Models\RequestRescueLog;
use App\Models\Vehicle\Vehicle;
use App\Models\Vehicle\VehicleLog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DriveController extends Controller
{
    public function startDrive(StartDriveRequest $request, $id)
    {

        $vehicle = Vehicle::with(['type', 'brand', 'user'])->where('uuid', $id)->first();
        $auth = auth()->user();

        $vehicle->update([
            'assigned_to' => $auth->id,
            'is_driving' => true
        ]);

        $vehicle->refresh();
        VehicleLog::create([
            'uuid' => Str::uuid(),
            'vehicle_id' => $vehicle->id,
            'user_id' => $auth->id,
            'lat' => $request->input('lat'),
            'lng' => $request->input('lng'),
            'odometer' => $vehicle->odometer,
            'type' => 'start',
        ]);
       
        return response(new VehicleListResource($vehicle));
    }

    public function stopDrive(StopDriveRequest $request, $id)
    {        
        $vehicle = Vehicle::with(['type', 'brand', 'user'])->where('uuid', $id)->first();
        $auth = auth()->user();

        if($auth->hasRole("Company Driver"))
        {
            $vehicle->update([
                'assigned_to' => null,
            ]);
        }

        $vehicle->update([
            'is_driving' => false,
            'blowbagets_id' => null,
            'odometer' => $request->input('odometer')
        ]);

        $vehicle->refresh();
        $last_log = VehicleLog::where('vehicle_id', $vehicle->id)->orderBy('created_at', 'DESC')->first();

        VehicleLog::create([
            'uuid' => $last_log->uuid,
            'vehicle_id' => $vehicle->id,
            'user_id' => $auth->id,
            'lat' => $request->input('lat'),
            'lng' => $request->input('lng'),
            'odometer' => $vehicle->odometer,
            'type' => 'stop',
        ]);
        
        return response(new VehicleListResource($vehicle));
    }

    public function requestRescuer(RequestRescuerRequest $request)
    {
       $request_resquer = RequestRescueLog::create([
            'user_id' => auth()->user()->id,
            'lat' => $request->input('lat'),
            'lng' => $request->input('lng'),
            'rescuer_id' => $request->input('rescuer_id'),
        ]);
        return response(new VehicleListResource($request_resquer));
    }
}
