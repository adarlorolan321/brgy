<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
//use Laravel\Sanctum\HasApiTokens;//I don't know yet how to use this package, maybe we can replace Laravel Passport next time with this one?
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'middle_name',
        'family_name',
        'type',
        'email',
        'email_verified_at',
        'password',
        'photo',
        'gender',
        'address',
        'mobile_number',
        'birthdate',
        'active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    public function getAvatarAttribute()
    {
        $findStr = "public";
        $replaceWith = "storage";
        $str = $this->photo;

        $imageLink = preg_replace('/' . $findStr . '/', $replaceWith, $str, 1);

        return env('APP_URL').'/'.$imageLink;
    }

    public function getTypeTextAttribute()
    {
        switch ($this->type) {
            case 'A':
                return 'Admin';
                break;
            case 'CD':
                return 'Company Driver';
                break;
            case 'PD':
                return 'Personal Driver';
                break;
            default:
                return 'User type not found';
        }
    }
    
    public function getSexTextAttribute()
    {
        switch ($this->gender) {
            case 'M':
                return 'Male';
                break;
            case 'F':
                return 'Female';
                break;
            case 'R':
                return 'Rather Not Say';
                break;
            default:
                return 'Not mentioned';
        }
    }

}
