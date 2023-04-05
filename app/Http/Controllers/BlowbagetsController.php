<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blowbagets\StoreBlowbagetsRequest;
use App\Http\Resources\Blowbagets\BlowbagetsResource;
use App\Models\Blowbagets;
use Illuminate\Http\Request;

class BlowbagetsController extends Controller
{
    public function store(StoreBlowbagetsRequest $request)
    {
        $blow_bagets = Blowbagets::create(array_merge(['user_id' => auth()->user()->id], $request->validated()));
        return new BlowbagetsResource($blow_bagets->load(['vehicle']));
    }

    public function userData()
    {
        $blowbagets = Blowbagets::with(['vehicle'])->where('user_id', auth()->user()->id)->get();
        return BlowbagetsResource::collection($blowbagets);
    }
}
