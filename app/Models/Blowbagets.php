<?php

namespace App\Models;

use App\Models\Vehicle\Vehicle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blowbagets extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'vehicle_id',
        'break',
        'lights',
        'oil',
        'water',
        'battery',
        'air',
        'gas',
        'engine',
        'tools',
        'self',
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
