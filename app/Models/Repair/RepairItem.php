<?php

namespace App\Models\Repair;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class RepairItem extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'item',
        'amount',
        'repair_id'
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
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=RI&color=8176f2&background=F8F7FA';
    }
}
