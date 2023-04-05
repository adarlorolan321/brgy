<?php

namespace App\Http\Controllers;

use App\Http\Resources\Vehicle\VehicleListResource;
use App\Models\Vehicle\Vehicle;
use Illuminate\Http\Request;

class DriveController extends Controller
{
    public function startDrive($id)
    {
        $vehicle = Vehicle::with(['type', 'brand', 'user'])->findOrFail($id);
        $auth = auth()->user();

        $vehicle->update([
            'assigned_to' => $auth->id
        ]);
        $vehicle->refresh();
        return response(new VehicleListResource($vehicle));
    }
}
