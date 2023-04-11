<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProvinceResource;
use App\Models\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function index(){
        $provinces = Province::with(['cities'])->get();
        return ProvinceResource::collection($provinces);
    }
}
