<?php

namespace App\Http\Controllers\Vehicle;

use App\Http\Controllers\Controller;
use App\Http\Resources\Vehicle\VehicleListResource;
use App\Models\Vehicle\Vehicle;
use App\Http\Requests\Vehicle\StoreVehicleRequest;
use App\Http\Requests\Vehicle\UpdateVehicleRequest;
use App\Models\Vehicle\VehicleBrand;
use App\Models\Vehicle\VehicleType;

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
            ->with([])
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
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $brands = VehicleBrand::all();
        $types = VehicleType::all();
        $props = [
            'data' => VehicleListResource::collection($data),
            'params' => $request->all(),
            'brands' => $brands,
            'types' => $types
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
        $data = Vehicle::create($request->validated());
        sleep(1);

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
        $data->load(['brand', 'type', 'user']);
        if ($request->wantsJson()) {
            return new VehicleListResource($data);
        }
        return Inertia::render('Admin/Vehicle/Show', [
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
        sleep(1);

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
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
