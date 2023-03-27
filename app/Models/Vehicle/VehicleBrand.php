<?php

namespace App\Models\Vehicle;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class VehicleBrand extends Model  implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        "name",
    ];

    protected $appends = [
        'brand_icon', 'brand_icon_url'
    ];

    public function getBrandIconAttribute()
    {
        $media = $this->getMedia('brand_icon')->first();
        return $media ? array_merge($media->toArray(), [
            'url' => $media->getUrl(),
            'src' => $media->getUrl(),
            'path' => $media->getUrl(),
            'preview_url' => $media->getUrl(),
        ]) : null;
    }

    public function getBrandIconUrlAttribute()
    {
        $media = $this->getMedia('brand_icon')->first();
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->name . '&color=8176f2&background=F8F7FA';
    }
}
