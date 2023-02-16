<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'brand',
        'model',
        'year',
        'car_type_id',
        'assigned_to',
        'created_by',
        'plate_number'
    ];
    
    public function carType() {
        return $this->belongsTo(CarType::class);
    }

    public function assignedTo() {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function createdBy() {
        return $this->belongsTo(User::class, 'created_by');
    }
    
    public function blowbagets() {
        return $this->hasMany(BLOWBAGETS::class);
    }
}
