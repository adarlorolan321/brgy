<?php

namespace App\Models\Rescue;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rescuer extends Model
{
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
    ];

    public function services()
    {
        return $this->belongsToMany(RescueService::class, 'rescuer_service', 'rescuer_id', 'service_id');
    }
}
