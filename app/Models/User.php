<?php

namespace App\Models;

use App\Models\Repair\Repair;
use App\Models\Rescue\RescueLog;
use App\Models\User\UserScope;
use App\Models\Vehicle\VehicleDriveLog;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens;
    use InteractsWithMedia;
    use HasFactory;
    // use HasProfilePhoto;
    use Notifiable;
    use HasRoles;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'first_name',
        'last_name',
        'middle_name',
        'gender',
        'province',
        'city',
        'email',
        'mobile_number',
        'password',
        'status',
        'license_number',
        'license_type',
        'expiration_date',
        'blood_type',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
        "roles",
        'media'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo',
        'role', 
        'profile_photo_url',
        'license_front',
        'license_front_url',
        'license_back',
        'license_back_url',
    ];

    protected static function  booted()
    {
        static::creating(function ($user) {
            $user->name = $user->first_name . ' ' . $user->middle_name . ' ' . $user->last_name;
        });

        static::updating(function ($user) {
            $user->name = $user->first_name . ' ' . $user->middle_name . ' ' . $user->last_name;
        });
    }

    public function getRoleAttribute()
    {
        return $this->getRoleNames()->implode(', ');
    }

    public function getProfilePhotoAttribute()
    {
        $media = $this->getMedia('profile_picture')->first();
        return $media ? array_merge($media->toArray(), [
            'url' => $media->getUrl(),
            'src' => $media->getUrl(),
            'path' => $media->getUrl(),
            'preview_url' => $media->getUrl(),
        ]) : null;
    }

    public function getProfilePhotoUrlAttribute()
    {
        $media = $this->getMedia('profile_picture')->first();
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->name . '&color=8176f2&background=F8F7FA';
    }

    public function getLicenseFrontAttribute()
    {
        $media = $this->getMedia('license_front')->first();
        return $media ? array_merge($media->toArray(), [
            'url' => $media->getUrl(),
            'src' => $media->getUrl(),
            'path' => $media->getUrl(),
            'preview_url' => $media->getUrl(),
        ]) : null;
    }

    public function getLicenseFrontUrlAttribute()
    {
        $media = $this->getMedia('license_front')->first();
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->name . '&color=8176f2&background=F8F7FA';
    }

    public function getLicenseBackAttribute()
    {
        $media = $this->getMedia('license_back')->first();
        return $media ? array_merge($media->toArray(), [
            'url' => $media->getUrl(),
            'src' => $media->getUrl(),
            'path' => $media->getUrl(),
            'preview_url' => $media->getUrl(),
        ]) : null;
    }

    public function getLicenseBackUrlAttribute()
    {
        $media = $this->getMedia('license_back')->first();
        return $media ? $media->getUrl() : 'https://ui-avatars.com/api/?name=' . $this->name . '&color=8176f2&background=F8F7FA';
    }


    public function repairs(){
        return $this->hasMany(Repair::class);
    }

    public function driveLogs(){
        return $this->hasMany(VehicleDriveLog::class);
    }

    
    public function rescueLogs(){
        return $this->hasMany(RescueLog::class);
    }

}
