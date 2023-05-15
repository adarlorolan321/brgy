<?php

namespace App\Models\Vehicle;

use App\Models\User;
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
        'user_id',
        'distance',
        'average_speed',
        'uuid'
    ];

    public function vehicle(){
        return $this->belongsTo(Vehicle::class);
    }

    public function logs(){
        return $this->hasMany(VehicleLog::class, 'uuid', 'uuid');
    }
    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
