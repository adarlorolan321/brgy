<?php

namespace App\Models\Vehiclemodelfeature;

use App\Models\Vehicle\VehicleBrand;
use App\Models\Vehicle\VehicleType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VehicleModelFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        "car_brand_id", "car_type_id", "model", "year", "color", "image", "full_name",
    ];

    
     
    public function vehicle_type()
    {
        return $this->belongsTo(VehicleType::class, 'car_type_id');
    }

    public function vehicle_brand()
    {
        return $this->belongsTo(VehicleBrand::class, 'car_brand_id');
    }

}
