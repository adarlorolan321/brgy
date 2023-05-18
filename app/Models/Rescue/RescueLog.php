<?php

namespace App\Models\Rescue;

use App\Models\User;
use App\Models\Vehicle\Vehicle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RescueLog extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "vehicle_id",
        "lat",
        "lng",
        "rescuer_id",
        "rescue_service_id",
        "action",
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    
    public function vehicle(){
        return $this->belongsTo(Vehicle::class);
    }
    
    public function rescuer(){
        return $this->belongsTo(Rescuer::class);
    }

    public function rescue_service(){
        return $this->belongsTo(RescueService::class);
    }
}
