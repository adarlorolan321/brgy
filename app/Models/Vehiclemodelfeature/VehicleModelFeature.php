<?php

namespace App\Models\Vehiclemodelfeature;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleModelFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        "car_brand_id", "car_type_id", "model", "year", "color", "image", "full_name",
    ];
}
