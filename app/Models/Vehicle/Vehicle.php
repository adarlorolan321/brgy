<?php

namespace App\Models\Vehicle;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Vehicle extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        "vehicle_brand_id",
        "model",
        "year",
        "vehicle_type_id",
        "assigned_to",
        "plate_number",
        "color",
    ];
    protected $appends = [
        'image', 'image_url'
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
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->name . '&color=8176f2&background=F8F7FA';
    }
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
