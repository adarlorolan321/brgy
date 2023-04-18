<?php

namespace App\Models\Rescue;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
class Rescuer extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasFactory;

    protected $fillable = [
        "type",
        "name",
        "contact_number",
        "is_contact_number_verified",
        "email",
        "messenger_link",
        "latitude",
        "longitude",
        "province",
        "city",
        "gender",
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

    public function services()
    {
        return $this->belongsToMany(RescueService::class, 'rescuer_service', 'rescuer_id', 'service_id');
    }
}
