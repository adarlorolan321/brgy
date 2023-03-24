<?php

namespace App\Http\Controllers\Vehicle;

use App\Http\Controllers\Controller;
use App\Http\Resources\Vehicle\VehicleBrandListResource;
use App\Models\Vehicle\VehicleBrand;
use App\Http\Requests\Vehicle\StoreVehicleBrandRequest;
use App\Http\Requests\Vehicle\UpdateVehicleBrandRequest;
use App\Models\Media;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleBrandController extends Controller
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

        $data = VehicleBrand::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    // $query->where('column', 'like', '%' . $queryString . '%')
                    //     ->orWhere('column', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => VehicleBrandListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('vehicle_brands.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Vehicle/Brand/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/VehicleBrand/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehicleBrandRequest $request)
    {
        $data = VehicleBrand::create($request->validated());
        //Upload Profile Photo
        if (isset($request->input('brand_icon', [])['id'])) {
            Media::where('id', $request->input('brand_icon', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }
        sleep(1);
        if ($request->wantsJson()) {
            return new VehicleBrandListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = VehicleBrand::findOrFail($id);
        if ($request->wantsJson()) {
            return new VehicleBrandListResource($data);
        }
        return Inertia::render('Admin/VehicleBrand/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = VehicleBrand::findOrFail($id);
        if ($request->wantsJson()) {
            return new VehicleBrandListResource($data);
        }
        return Inertia::render('Admin/VehicleBrand/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleBrandRequest $request, string $id)
    {
        $data = VehicleBrand::findOrFail($id);
        $data->update($request->validated());
        //Upload Profile Photo
        if (isset($request->input('brand_icon', [])['id'])) {
            if ($request->input('brand_icon', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('brand_icon');
            }
            Media::where('id', $request->input('brand_icon', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }
        sleep(1);

        if ($request->wantsJson()) {
            return (new VehicleBrandListResource($data))
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
        $data = VehicleBrand::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
