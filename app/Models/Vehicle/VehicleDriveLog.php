<?php

namespace App\Models\Vehicle;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleDriveLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'vehicle_id',
        'vehicle_log_id',
        'start_date',
        'start_time',
        'end_date',
        'end_time',
        'distance',
        'average_speed',
        'uuid'
    ];

    public function logs(){
        return $this->hasMany(VehicleLog::class, 'uuid', 'uuid');
    }
}
