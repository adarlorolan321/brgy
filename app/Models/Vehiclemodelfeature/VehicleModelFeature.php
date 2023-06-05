<?php

namespace App\Models\Vehiclemodelfeature;

use App\Models\Vehicle\VehicleBrand;
use App\Models\Vehicle\VehicleType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Support\Str;

class VehicleModelFeature extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

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

    protected $appends = [
        'image', 
        'image_url',
    ];

    public function getImageAttribute()
    {
        $media = $this->getMedia('image')->first();
        return $media ? array_merge($media->toArray(), [
            'url' => $media->getUrl(),
            'src' => $media->getUrl(),
            'path' => $media->getUrl(),
            'preview_url' => $media->getUrl(),
        ]) : null;
    }

    public function getImageUrlAttribute()
    {
        $media = $this->getMedia('image')->first();
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->model . '&color=8176f2&background=F8F7FA';
    }


}
