<?php

namespace App\Models\Repair;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Repair extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    

    protected $fillable = [
        "mechanic_name",
        "mechanic_contact_number",
        "mechanic_address",
        "user_id",
    ];

    protected $appends = [
        'images', 'images_url'
    ];

    public function getImagesAttribute()
    {

        $medias = $this->getMedia('images');
        $images = [];

        foreach ($medias as $media) {
            $images[] = $media ? array_merge($media->toArray(), [
                'url' => $media->getUrl(),
                'src' => $media->getUrl(),
                'path' => $media->getUrl(),
                'preview_url' => $media->getUrl(),
            ]) : null;
        }
        return $images;
    }

    public function getImagesUrlAttribute()
    {

        $medias = $this->getMedia('images');
        $images = [];

        foreach ($medias as $media) {
            $images[] = $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->name . '&color=8176f2&background=F8F7FA';
        }

        return $images;
    }

}
