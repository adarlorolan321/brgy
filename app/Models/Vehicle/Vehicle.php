<?php

namespace App\Models\Vehicle;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        "vehicle_brand_id",
        "model",
        "year",
        "vehicle_type_id",
        "assigned_to",
        "plate_number",
        "color",
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'id');
    }
    public function brand()
    {
        return $this->belongsTo(VehicleBrand::class, 'vehicle_brand_id', 'id');
    }
    public function type()
    {
        return $this->belongsTo(VehicleType::class, 'vehicle_type_id', 'id');
    }
}
