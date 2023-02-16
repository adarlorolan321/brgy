<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BLOWBAGETS extends Model
{
    use HasFactory;

    protected $table = 'blowbagets';

    protected $fillable = [
        'car_id',
        'created_by',
        'break',
        'lights',
        'oil',
        'water',
        'battery',
        'air',
        'gas',
        'engine',
        'tools',
        'self'
    ];

    public function car() {
        return $this->belongsTo(Car::class);
    }
    
    public function createdBy() {
        return $this->belongsTo(User::class, 'created_by');
    }
}
