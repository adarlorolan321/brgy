<?php

namespace App\Models\Vehicle;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'vehicle_id',
        'user_id',
        'lat',
        'lng',
        'odometer',
        'type',
    ];
}
