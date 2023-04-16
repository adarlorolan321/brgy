<?php

namespace App\Models\Repair;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Repair extends Model
{
    use HasFactory;

    protected $fillable = [
        "mechanic_name",
        "mechanic_contact_number",
        "mechanic_address",
        "user_id",
    ];
}
