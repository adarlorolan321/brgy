<?php

namespace App\Models\Insurance;

use App\Models\User;
use App\Models\Vehicle\Vehicle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class InsuranceClaim extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        "user_id",
        "vehicle_id",
        "police_station_address",
        "police_station_contact_number",
        "status",
        "amount",
        "reason",
    ];

    protected $appends = [
        'police_blotter_images', 
        'police_blotter_images_url',
        'vehicle_damage_images', 
        'vehicle_damage_images_url'
    ];

    public function getPoliceBlotterImagesAttribute()
    {

        $medias = $this->getMedia('police_blotter_images');
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

    public function getPoliceBlotterImagesUrlAttribute()
    {

        $medias = $this->getMedia('police_blotter_images');
        $images = [];

        foreach ($medias as $media) {
            $images[] = $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=IC&color=8176f2&background=F8F7FA';
        }

        return $images;
    }

    public function getVehicleDamageImagesAttribute()
    {

        $medias = $this->getMedia('vehicle_damage_images');
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

    public function getVehicleDamageImagesUrlAttribute()
    {

        $medias = $this->getMedia('vehicle_damage_images');
        $images = [];

        foreach ($medias as $media) {
            $images[] = $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=IC&color=8176f2&background=F8F7FA';
        }

        return $images;
    }




    public function user(){
        return $this->belongsTo(User::class);
    }

    public function vehicle(){
        return $this->belongsTo(Vehicle::class);
    }
}
