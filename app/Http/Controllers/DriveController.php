<?php

namespace App\Http\Controllers;

use App\Http\Requests\Drive\RequestRescuerRequest;
use App\Http\Requests\Drive\StartDriveRequest;
use App\Http\Requests\Drive\StopDriveRequest;
use App\Http\Resources\Vehicle\VehicleListResource;
use App\Models\RequestRescueLog;
use App\Models\Vehicle\Vehicle;
use App\Models\Vehicle\VehicleDriveLog;
use App\Models\Vehicle\VehicleLog;
use Carbon\Carbon;
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
        $start_log = VehicleLog::where('vehicle_id', $vehicle->id)->orderBy('created_at', 'DESC')->first();
        $end_log = VehicleLog::create([
            'uuid' => $start_log->uuid,
            'vehicle_id' => $vehicle->id,
            'user_id' => $auth->id,
            'lat' => $request->input('lat'),
            'lng' => $request->input('lng'),
            'odometer' => $vehicle->odometer,
            'type' => 'stop',
        ]);

        $vehicle_drive_log = VehicleDriveLog::create([
            'uuid' => $start_log->uuid,
            'vehicle_id' => $vehicle->id,

            'start_date' => Carbon::parse($start_log->created_at)->format('Y-m-d'),
            'start_time'  => Carbon::parse($start_log->created_at)->format('H:i:s'),
            
            'end_date' => Carbon::parse($end_log->created_at)->format('Y-m-d'),
            'end_time'  => Carbon::parse($end_log->created_at)->format('H:i:s'),
            
            'distance' => $request->input('distance', 0),
            'average_speed' => $request->input('average_speed', 0),
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
