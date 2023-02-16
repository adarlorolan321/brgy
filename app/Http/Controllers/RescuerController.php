<?php

namespace App\Http\Controllers;

use App\Models\Rescuer;
use App\Http\Requests\StoreRescuerRequest;
use App\Http\Requests\UpdateRescuerRequest;
use App\Http\Resources\RescuerResource;
use App\Models\RescuerRescueService;
use App\Models\RescueService;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Http\Request;
use Carbon\Carbon;

class RescuerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $rows_per_page = $request->get('rows_per_page') ? $request->get('rows_per_page') : 1000;

        $rescuer = QueryBuilder::for(Rescuer::class)
                ->allowedFilters([
                    AllowedFilter::exact('id'),
                    'name',
                    'address'
                ])
                ->allowedSorts([
                    'name',
                    'address'
                ])
                ->paginate($rows_per_page);

        if ($rescuer) {
            return RescuerResource::collection($rescuer);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreRescuerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRescuerRequest $request)
    {
        $rescuer = Rescuer::create($request->validated());
    
        $rescue_service_ids = $request->get('rescue_services');
        
        if(!empty($rescue_service_ids)) {
            foreach ($rescue_service_ids as $rescue_service_id) {
                RescuerRescueService::create([
                    'rescuer_id'        => $rescuer->id, 
                    'rescue_service_id' => $rescue_service_id
                ]);
            }
        }

        RescuerResource::withoutWrapping();
        $rescuerResource = new RescuerResource($rescuer);

        return response()->json($rescuerResource, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rescuer  $rescuer
     * @return \Illuminate\Http\Response
     */
    public function show(Int $id)
    {
        $rescuer = Rescuer::find($id);

        if ($rescuer) {
            RescuerResource::withoutWrapping();
            $userResource = new RescuerResource($rescuer);

            return response()->json($userResource, 200);   
        } else {
            return response()->json(
                [
                    'errors' => [
                        'message' => [
                            'Rescuer ID '.$id.' not found.'
                        ]
                    ]
                ],
                404
            );    
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRescuerRequest  $request
     * @param  \App\Models\Rescuer  $rescuer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRescuerRequest $request, Int $id)
    {
        $rescuer = Rescuer::find($id);
        $rescuer->update($request->validated());

        $rescue_service_ids = $request->get('rescue_services');
        
        if(!empty($rescue_service_ids)) {
            RescuerRescueService::where('rescuer_id', $id)->delete();

            foreach ($rescue_service_ids as $rescue_service_id) {
                RescuerRescueService::create([
                    'rescuer_id'        => $rescuer->id, 
                    'rescue_service_id' => $rescue_service_id
                ]);
            }
        }

        if ($request->hasfile('photo')) {
            // Remove the old image if any
            if ($rescuer->photo && Storage::exists($rescuer->photo)) {
                Storage::delete($rescuer->photo);
            }

            $rescuer->photo = $request->file('photo')->store('public/uploads');
        }

        if ($rescuer->save()) {
            RescuerResource::withoutWrapping();
            $rescuerResource = new RescuerResource($rescuer);

            return response()->json($rescuerResource, 200);
        } else {
            return response()->json(
                [
                    'errors' => [
                        'message' => [
                            'Unable to edit Rescue Service ID '.$id
                        ]
                    ]
                ],
                422
            );    
        }

        return response()->json($rescuer, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rescuer  $rescuer
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        Rescuer::destroy($id);
        
        return response()->json(null, 204);
    }
}
