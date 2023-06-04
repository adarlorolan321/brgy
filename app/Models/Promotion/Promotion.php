<?php

namespace App\Models\Promotion;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use HasFactory;

    protected $fillable = [
        "name","promoter_name","description","lat","lng","expiration_date","image","distance",
    ];
}
