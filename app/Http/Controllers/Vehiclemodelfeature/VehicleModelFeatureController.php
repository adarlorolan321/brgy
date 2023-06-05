<?php

namespace App\Http\Controllers\Vehiclemodelfeature;

use App\Http\Controllers\Controller;
use App\Http\Resources\Vehiclemodelfeature\VehicleModelFeatureListResource;
use App\Models\Vehiclemodelfeature\VehicleModelFeature;
use App\Http\Requests\Vehiclemodelfeature\StoreVehicleModelFeatureRequest;
use App\Http\Requests\Vehiclemodelfeature\UpdateVehicleModelFeatureRequest;
use App\Models\Vehicle\VehicleBrand;
use App\Models\Vehicle\VehicleType;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleModelFeatureController extends Controller
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

        $data = VehicleModelFeature::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('full_name', 'like', '%' . $queryString . '%')
                        ->orWhere('car_brand_id', 'like', '%' . $queryString . '%')
                        ->orWhere('car_type_id', 'like', '%' . $queryString . '%')
                        ->orWhere('model', 'like', '%' . $queryString . '%')
                        ->orWhere('year', 'like', '%' . $queryString . '%')
                        ->orWhere('color', 'like', '%' . $queryString . '%')
                        ->orWhereHas('vehicle_brand', function ($query) use ($queryString) {
                            $query->where('name', 'like', '%' . $queryString . '%');
                        })
                        ->orWhereHas('vehicle_type', function ($query) use ($queryString) {
                            $query->where('name', 'like', '%' . $queryString . '%');
                        });
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $brands = VehicleBrand::all();
        $types = VehicleType::all();
        $props = [
            'data' => VehicleModelFeatureListResource::collection($data),
            'params' => $request->all(),
            'brands' => $brands,
            'types' => $types,
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('vehicle_model_feature.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Vehicle/Model/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/VehicleModelFeature/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehicleModelFeatureRequest $request)
    {
        $data = VehicleModelFeature::create($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return new VehicleModelFeatureListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = VehicleModelFeature::findOrFail($id);
        if ($request->wantsJson()) {
            return new VehicleModelFeatureListResource($data);
        }
        return Inertia::render('Admin/VehicleModelFeature/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = VehicleModelFeature::findOrFail($id);
        if ($request->wantsJson()) {
            return new VehicleModelFeatureListResource($data);
        }
        return Inertia::render('Admin/VehicleModelFeature/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleModelFeatureRequest $request, string $id)
    {
        $data = VehicleModelFeature::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new VehicleModelFeatureListResource($data))
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
        $data = VehicleModelFeature::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
