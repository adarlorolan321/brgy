<?php

namespace App\Models\Vehicle;

use App\Models\Blowbagets;
use App\Models\Insurance\InsuranceClaim;
use App\Models\Repair\Repair;
use App\Models\Rescue\RescueLog;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Support\Str;


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
        "odometer",
        "is_driving",
        "uuid",
        'blowbagets_id',
        "chassis_number",
        "engine_number",
        "orcr_number",
        "expiration_date",
        "insurance_company",
        "insurance_policy_number",
        "last_driven_by",
        "type",
    ];

    protected $casts = [
        'is_driving' => 'boolean'
    ];

    protected $appends = [
        'image', 
        'image_url',

        'insurance_photo', 
        'insurance_photo_url',
    ];

    protected static function  booted()
    {
        static::creating(function ($service) {
            $service->uuid = Str::uuid();
        });
    }

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

    public function getInsurancePhotoAttribute()
    {
        $media = $this->getMedia('insurance_photo')->first();
        return $media ? array_merge($media->toArray(), [
            'url' => $media->getUrl(),
            'src' => $media->getUrl(),
            'path' => $media->getUrl(),
            'preview_url' => $media->getUrl(),
        ]) : null;
    }

    public function getInsurancePhotoUrlAttribute()
    {
        $media = $this->getMedia('insurance_photo')->first();
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->model . '&color=8176f2&background=F8F7FA';
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'id');
    }
    
    public function last_driver()
    {
        return $this->belongsTo(User::class, 'last_driven_by', 'id');
    }

    
    public function brand()
    {
        return $this->belongsTo(VehicleBrand::class, 'vehicle_brand_id', 'id');
    }
    public function type()
    {
        return $this->belongsTo(VehicleType::class, 'vehicle_type_id', 'id');
    }

    public function blowbagets(){
        return $this->belongsTo(Blowbagets::class, 'blowbagets_id', 'id');
    }

    public function logs(){
        return $this->hasMany(VehicleDriveLog::class, 'vehicle_id', 'id');
    }

    public function repairs(){
        return $this->hasMany(Repair::class, 'vehicle_id', 'id');
    }

    public function rescues(){
        return $this->hasMany(RescueLog::class, 'vehicle_id', 'id');
    }


    public function insurance_claims(){
        return $this->hasMany(InsuranceClaim::class);
    }
}
