<?php

namespace App\Models;

use App\Models\Rescue\Rescuer;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestRescueLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'lat',
        'lng',
        'rescuer_id',
    ];

    public function rescuer(){
        return $this->belongsTo(Rescuer::class);
    }

    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->format('F j, Y h:i A');
    }
}
