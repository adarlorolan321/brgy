<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RescuerRescueService extends Model
{
    use HasFactory;

    protected $fillable = [
        'rescuer_id',
        'rescue_service_id'
    ];

    public function rescuer() {
        return $this->belongsTo(Rescuer::class);
    }

    public function rescueService() {
        return $this->belongsTo(RescueService::class);
    }
}
