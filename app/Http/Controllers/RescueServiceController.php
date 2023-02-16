<?php

namespace App\Http\Controllers;

use App\Models\RescueService;
use App\Models\RescuerRescueService;
use App\Http\Requests\StoreRescueServiceRequest;
use App\Http\Requests\UpdateRescueServiceRequest;
use App\Http\Resources\RescueServiceResource;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Http\Request;
use Carbon\Carbon;

class RescueServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $rows_per_page = $request->get('rows_per_page') ? $request->get('rows_per_page') : 1000;

        $rescue_service = QueryBuilder::for(RescueService::class)
                ->allowedFilters([
                    AllowedFilter::exact('id'),
                    'name',
                ])
                ->allowedSorts([
                    'name',
                ])
                ->paginate($rows_per_page);

        if ($rescue_service) {
            return RescueServiceResource::collection($rescue_service);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreRescueServiceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRescueServiceRequest $request)
    {

        $rescue_service = RescueService::create($request->validated());
        $rescue_service->photo = ($request->hasfile('photo') ? $request->file('photo')->store('public/uploads') : NULL);
        
        $rescuer_ids = $request->get('rescuers');
        
        if(!empty($rescuer_ids)) {
            foreach ($rescuer_ids as $rescuer_id) {
                RescuerRescueService::create([
                    'rescuer_id'        => $rescuer_id, 
                    'rescue_service_id' => $rescue_service->id
                ]);
            }
        }

        if ($rescue_service->save()) {
            RescueServiceResource::withoutWrapping();
            $userResource = new RescueServiceResource($rescue_service);

            return response()->json($userResource, 201);
        }      
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RescueService  $rescue_service
     * @return \Illuminate\Http\Response
     */
    public function show(Int $id)
    {
        $rescue_service = RescueService::find($id);

        if ($rescue_service) {
            RescueServiceResource::withoutWrapping();
            $rescueServiceResource = new RescueServiceResource($rescue_service);

            return response()->json($rescueServiceResource, 200);   
        } else {
            return response()->json(
                [
                    'errors' => [
                        'message' => [
                            'RescueService ID '.$id.' not found.'
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
     * @param  \App\Http\Requests\UpdateRescueServiceRequest  $request
     * @param  \App\Models\RescueService  $rescue_service
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRescueServiceRequest $request, Int $id)
    {
        $rescue_service = RescueService::find($id);
        $rescue_service->update($request->validated());
        $rescuer_ids = $request->get('rescuers');
        
        if ($request->hasfile('photo')) {
            // Remove the old image if any
            if ($rescue_service->photo && Storage::exists($rescue_service->photo)) {
                Storage::delete($rescue_service->photo);
            }

            $rescue_service->photo = $request->file('photo')->store('public/uploads');
        }

        if(!empty($rescuer_ids)) {
            RescuerRescueService::where('rescue_service_id', $id)->delete();
            
            foreach ($rescuer_ids as $rescuer_id) {
                RescuerRescueService::create([
                    'rescuer_id'        => $rescuer_id, 
                    'rescue_service_id' => $rescue_service->id
                ]);
            }
        }

        if ($rescue_service->save()) {
            RescueServiceResource::withoutWrapping();
            $rescueServiceResource = new RescueServiceResource($rescue_service);

            return response()->json($rescueServiceResource, 200);
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

        return response()->json($rescue_service, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RescueService  $rescue_service
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        RescueService::destroy($id);
        
        return response()->json(null, 204);
    }
}
