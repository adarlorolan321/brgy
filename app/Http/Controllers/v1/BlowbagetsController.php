<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\v1\Blowbagets\StoreBlowbagetsRequest;
use App\Http\Requests\v1\Blowbagets\UpdateBlowbagetsRequest;
use App\Http\Resources\v1\BlowbagetsResource;
use App\Models\BLOWBAGETS;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class BlowbagetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $rows_per_page = $request->get('rows_per_page') ? $request->get('rows_per_page') : 1000;

        $blowbagets = QueryBuilder::for(BLOWBAGETS::class)
                ->allowedFilters([
                    AllowedFilter::exact('id'),
                ])
                ->allowedSorts([
                ])
                ->paginate($rows_per_page);

        if ($blowbagets) {
            return BlowbagetsResource::collection($blowbagets);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBlowbagetsRequest $request)
    {
        $blowbagets = BLOWBAGETS::create($request->validated());

        BlowbagetsResource::withoutWrapping();
        $blowbagetsResource = new BlowbagetsResource($blowbagets);

        return response()->json($blowbagetsResource, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $blowbagets = BLOWBAGETS::findOrFail($id);

        if ($blowbagets) {
            return new BlowbagetsResource($blowbagets);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBlowbagetsRequest $request, $id)
    {
        $blowbagets = BLOWBAGETS::findOrFail($id);
        $blowbagets->update($request->validated());

        BlowbagetsResource::withoutWrapping();
        $blowbagetsResource = new BlowbagetsResource($blowbagets);

        return response()->json($blowbagetsResource, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        BLOWBAGETS::destroy($id);
        
        return response()->json(null, 204);
    }
}
