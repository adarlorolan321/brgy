<?php

namespace App\Http\Controllers\Vehicle;

use App\Http\Controllers\Controller;
use App\Http\Resources\Vehicle\VehicleListResource;
use App\Models\Vehicle\Vehicle;
use App\Http\Requests\Vehicle\StoreVehicleRequest;
use App\Http\Requests\Vehicle\UpdateVehicleRequest;
use App\Models\Media;
use App\Models\Vehicle\VehicleBrand;
use App\Models\Vehiclemodelfeature\VehicleModelFeature;
use App\Models\Vehicle\VehicleType;
use App\Models\Province;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
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

        $data = Vehicle::query()
            ->with(['type', 'brand', 'last_driver'])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('vehicle_brand_id', 'like', '%' . $queryString . '%')
                        ->orWhere('model', 'like', '%' . $queryString . '%')
                        ->orWhere('year', 'like', '%' . $queryString . '%')
                        ->orWhere('vehicle_type_id', 'like', '%' . $queryString . '%')
                        ->orWhere('assigned_to', 'like', '%' . $queryString . '%')
                        ->orWhere('plate_number', 'like', '%' . $queryString . '%')
                        ->orWhere('color', 'like', '%' . $queryString . '%');
                }
            })
            ->where(function($query) use ($request){
                if($request->has('type') && $request->input('type') != "")
                {
                    $query->where('type', $request->input('type'));
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $brands = VehicleBrand::all();
        $types = VehicleType::all();
        $provinces = Province::all();
        $vehicle_model = VehicleModelFeature::all();
        $props = [
            'data' => VehicleListResource::collection($data),
            'params' => $request->all(),
            'brands' => $brands,
            'types' => $types,
            'provinces' => $provinces,
            'vehicle_model' => $vehicle_model,
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('vehicles.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Vehicle/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Vehicle/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehicleRequest $request)
    {
        $params = $request->validated();

        if (auth()->user()->hasRole('Admin')) {
            $params = array_merge($params, ['assigned_to' => null, 'type' => 'Company Vehicle']);
        } else {
            $params = array_merge($params, ['assigned_to' => auth()->user()->id, 'type' => 'Private Vehicle']);
        }

        if ($params['assigned_to'] === null) {
            $params['assigned_to'] = 1; // Set a default user ID or assign the appropriate value
        }
        // Update the "model" field to contain the string value
        $params['model'] = $request->input('model.model');

        $data = Vehicle::create($params);

        if (isset($request->input('image', [])['id'])) {
            Media::where('id', $request->input('image', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

        if (isset($request->input('insurance_photo', [])['id'])) {
            Media::where('id', $request->input('insurance_photo', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

        if ($request->wantsJson()) {
            return new VehicleListResource($data);
        }
        return redirect()->back();
    }


    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Vehicle::findOrFail($id);
        $data->load([
            'brand', 
            'type', 
            'user', 
            'repairs', // repair logs
            'rescues' => [ // rescue logs
                'user',
                'rescuer',
                'rescue_service',
            ],
            'logs' => [ // drive logs
                'user',
                'logs'
            ],
            'insurance_claims' => [
                'user'
            ]
        ]);

        if ($request->wantsJson()) {
            return new VehicleListResource($data);
        }
        return Inertia::render('Admin/Vehicle/Show', [
            'data' => $data
        ]);
    }

    public function showRepair(Request $request, string $id)
    {
        $data = Vehicle::findOrFail($id);
        $data->load([
            'brand', 
            'type', 
            'user', 
            'repairs', // repair logs
        ]);

        if ($request->wantsJson()) {
            return new VehicleListResource($data);
        }
        return Inertia::render('Admin/Vehicle/ShowRepair', [
            'data' => $data
        ]);
    }
    
    public function showRescue(Request $request, string $id)
    {
        $data = Vehicle::findOrFail($id);
        $data->load([
            'brand', 
            'type', 
            'user', 
            'rescues' => [ // rescue logs
                'user',
                'rescuer',
                'rescue_service',
            ],
        ]);

        if ($request->wantsJson()) {
            return new VehicleListResource($data);
        }
        return Inertia::render('Admin/Vehicle/ShowRescue', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Vehicle::findOrFail($id);
        if ($request->wantsJson()) {
            return new VehicleListResource($data);
        }
        return Inertia::render('Admin/Vehicle/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleRequest $request, string $id)
    {
        $data = Vehicle::findOrFail($id);
        $data->update($request->validated());
        if (isset($request->input('image', [])['id'])) {
            if ($request->input('image', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('image');
            }
            Media::where('id', $request->input('image', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        } else {
            $data->clearMediaCollection('image');
        }

        
        if (isset($request->input('insurance_photo', [])['id'])) {
            if ($request->input('insurance_photo', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('insurance_photo');
            }
            Media::where('id', $request->input('insurance_photo', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        } else {
            $data->clearMediaCollection('insurance_photo');
        }

        if ($request->wantsJson()) {
            return (new VehicleListResource($data))
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
        $data = Vehicle::findOrFail($id);
        $data->delete();
        

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }

    public function getUserVehicle(){
        $myVehicles = Vehicle::with(['brand:id,name', 'type:id,name', 'user:id,name'])->where('assigned_to', auth()->user()->id)->get();
        return VehicleListResource::collection($myVehicles);
    }
}
