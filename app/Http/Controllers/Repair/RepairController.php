<?php

namespace App\Http\Controllers\Repair;

use App\Http\Controllers\Controller;
use App\Http\Resources\Repair\RepairListResource;
use App\Models\Repair\Repair;
use App\Http\Requests\Repair\StoreRepairRequest;
use App\Http\Requests\Repair\UpdateRepairRequest;
use App\Models\Media;
use App\Models\Repair\RepairItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Vehicle\Vehicle;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Http\Resources\User\DriverResource;

class RepairController extends Controller
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

        $data = Repair::query()
            ->with(['user', 'vehicle' => ['type', 'brand']])
            ->where(function($query) use ($request){
                if(!auth()->user()->hasRole('Admin'))
                {
                    $query->where('user_id', auth()->user()->id);
                }
            })
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    $query->where('mechanic_name', 'like', '%' . $queryString . '%')
                        ->orWhere('mechanic_contact_number', 'like', '%' . $queryString . '%')
                        ->orWhere('status', 'like', '%' . $queryString . '%')
                        ->orWhere('item', 'like', '%' . $queryString . '%')
                        ->orWhere('mechanic_address', 'like', '%' . $queryString . '%')
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

        $vehicles = Vehicle::all();
        $props = [
            'data' => RepairListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('repairs.index', ['page' => 1]);
        }

        $props = array_merge($props, ['vehicles' => $vehicles]);
        return Inertia::render('Admin/Repair/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Repair/Create');
    }

   
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRepairRequest $request)
    {
        $data = Repair::create(array_merge($request->validated(), ['user_id' => auth()->user()->id]));

        if($request->has('images')) {
            Media::whereIn('id', data_get($request->input('images'), '*.id'))
                ->update([
                    'model_id' => $data->id
                ]);
        }

        if(auth()->user()->hasRole('Private Driver'))
        {
            $data->update([
                'status' => 'Confirmed'
            ]);
        }else {
            $data->update([
                'status' => 'Pending'
            ]);
        }

        if ($request->wantsJson()) {
            return new RepairListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Repair::with(['user', 'vehicle' => ['type', 'brand']])->findOrFail($id);
        if ($request->wantsJson()) {
            return new RepairListResource($data);
        }
        return Inertia::render('Admin/Dryver/ShowRepair', [
            'data' => $data
        ]);
    }

     /**
     * Display the specified resource.
     */
    public function showLog(Request $request, string $id)
    {
        $data = User::with([
            'repairs' => ['vehicle' => ['brand', 'type']],
            'driveLogs' => ['vehicle' => ['brand', 'type']],
            'rescueLogs' => ['vehicle' => ['brand', 'type'], 'rescuer'],
        ])->findOrFail($id);
        if ($request->wantsJson()) {
            return new DriverResource($data);
        }
        return Inertia::render('Admin/Dryver/ShowRepair', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Repair::findOrFail($id);
        if ($request->wantsJson()) {
            return new RepairListResource($data);
        }
        return Inertia::render('Admin/Repair/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRepairRequest $request, string $id)
    {
        $data = Repair::findOrFail($id);
        $data->update($request->validated());

        
        Media::where('model_id', $id)
                ->where('model_type', 'App\Models\Repair\Repair')
                ->update([
                    'model_id' => 0
                ]);

        if($request->has('images')) {
            Media::whereIn('id', data_get($request->input('images'), '*.id'))
                ->update([
                    'model_id' => $data->id
                ]);
        }else {
            $data->clearMediaCollection('images');
        }

        if ($request->wantsJson()) {
            return (new RepairListResource($data))
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
        $data = Repair::findOrFail($id);
        $data->delete();

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
