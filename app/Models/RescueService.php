<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RescueService extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'photo'
    ];    

    public function getImageAttribute()
    {
        $findStr = "public";
        $replaceWith = "storage";
        $str = $this->photo;

        $imageLink = preg_replace('/' . $findStr . '/', $replaceWith, $str, 1);

        return env('APP_URL').'/'.$imageLink;
    }
    
    public function rescuerRescueService() {
        return $this->hasMany(RescuerRescueService::class);
    }
}
