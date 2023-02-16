<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rescuer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'lat',
        'lng',
        'contact_number',
        'messenger_name',
        'messenger_link'
    ];

    public function rescuerRescueService() {
        return $this->hasMany(RescuerRescueService::class);
    }
}