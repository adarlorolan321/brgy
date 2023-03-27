<?php

namespace App\Models\Rescue;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class RescueService extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        "name",
    ];
    protected $appends = [
        'icon', 'icon_url'
    ];
    public function getIconAttribute()
    {
        $media = $this->getMedia('icon')->first();
        return $media ? array_merge($media->toArray(), [
            'url' => $media->getUrl(),
            'src' => $media->getUrl(),
            'path' => $media->getUrl(),
            'preview_url' => $media->getUrl(),
        ]) : null;
    }

    public function getIconUrlAttribute()
    {
        $media = $this->getMedia('icon')->first();
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->name . '&color=8176f2&background=F8F7FA';
    }
}
