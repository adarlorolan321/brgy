<?php

namespace App\Http\Controllers\Insurance;

use App\Http\Controllers\Controller;
use App\Http\Resources\Insurance\InsuranceClaimListResource;
use App\Models\Insurance\InsuranceClaim;
use App\Http\Requests\Insurance\StoreInsuranceClaimRequest;
use App\Http\Requests\Insurance\UpdateInsuranceClaimRequest;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class InsuranceClaimController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        
        $page = $request->input('page', 1); // default 1
        $perPage = $request->input('perPage', 50); // default 50
        $queryString = $request->input('query', null);
        $sort = explode('.', $request->input('sort', 'id'));
        $order = $request->input('order', 'asc');

        $data = InsuranceClaim::query()
            ->with(['user', 'vehicle' => ['type', 'brand']])
            ->where(function($query) use ($request){
                if(!auth()->user()->hasRole('Admin'))
                {
                    $query->where('user_id', auth()->user()->id);
                }
            })
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('status', 'like', '%' . $queryString . '%') 
                    ->orWhere('amount', 'like', '%' . $queryString . '%') 
                    ->orWhere('reason', 'like', '%' . $queryString . '%') 
                    ->orWhere('police_station_address', 'like', '%' . $queryString . '%') 
                    ->orWhere('police_station_contact_number', 'like', '%' . $queryString . '%') 
                    ->orWhereHas('user', function($query) use ($queryString){
                        $query->where(DB::raw("CONCAT(first_name, ' ', middle_name, ' ', last_name)"), 'like', '%' . $queryString . '%');
                    })
                    ->orWhereHas('vehicle', function($query) use ($queryString){
                        $query->where('model', 'like', '%' . $queryString . '%')
                         ->orWhere('year', 'like', '%' . $queryString . '%');
                    })
                    ->orWhereHas('vehicle.type', function($query) use ($queryString){
                        $query->where('name', 'like', '%' . $queryString . '%');
                    })
                    ->orWhereHas('vehicle.brand', function($query) use ($queryString){
                        $query->where('name', 'like', '%' . $queryString . '%');
                    });
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => InsuranceClaimListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('insurance_claims.index', ['page' => 1]);
        }

        return Inertia::render('Admin/InsuranceClaim', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/InsuranceClaim/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInsuranceClaimRequest $request)
    {
        $data = InsuranceClaim::create(array_merge($request->validated(), [
            'user_id' => auth()->user()->id,
            'status' => 'Pending'
        ]));
        
        if($request->has('police_blotter_images')) {
            Media::whereIn('id', data_get($request->input('police_blotter_images'), '*.id'))
                ->update([
                    'model_id' => $data->id
                ]);
        }

        if($request->has('vehicle_damage_images')) {
            Media::whereIn('id', data_get($request->input('vehicle_damage_images'), '*.id'))
                ->update([
                    'model_id' => $data->id
                ]);
        }

        if ($request->wantsJson()) {
            return new InsuranceClaimListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = InsuranceClaim::with(['user', 'vehicle' => ['type', 'brand']])->findOrFail($id);
        if ($request->wantsJson()) {
            return new InsuranceClaimListResource($data);
        }
        return Inertia::render('Admin/InsuranceClaim/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = InsuranceClaim::findOrFail($id);
        if ($request->wantsJson()) {
            return new InsuranceClaimListResource($data);
        }
        return Inertia::render('Admin/InsuranceClaim/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInsuranceClaimRequest $request, string $id)
    {
        $data = InsuranceClaim::findOrFail($id);
        $data->update($request->validated());

        Media::where('model_id', $id)
                ->where('model_type', 'App\Models\Insurance\InsuranceClaim')
                ->update([
                    'model_id' => 0
                ]);
                
        if($request->has('vehicle_damage_images')) {
            Media::whereIn('id', data_get($request->input('vehicle_damage_images'), '*.id'))
                ->update([
                    'model_id' => $data->id
                ]);
        }else {
            $data->clearMediaCollection('vehicle_damage_images');
        }

        if($request->has('police_blotter_images')) {
            Media::whereIn('id', data_get($request->input('police_blotter_images'), '*.id'))
                ->update([
                    'model_id' => $data->id
                ]);
        }else {
            $data->clearMediaCollection('police_blotter_images');
        }


        if ($request->wantsJson()) {
            return (new InsuranceClaimListResource($data))
                ->response()
                ->setStatusCode(201);
        }

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = InsuranceClaim::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
