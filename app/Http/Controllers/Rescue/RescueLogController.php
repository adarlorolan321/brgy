<?php

namespace App\Http\Controllers\Rescue;

use App\Http\Controllers\Controller;
use App\Http\Resources\Rescue\RescueLogListResource;
use App\Models\Rescue\RescueLog;
use App\Http\Requests\Rescue\StoreRescueLogRequest;
use App\Http\Requests\Rescue\UpdateRescueLogRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RescueLogController extends Controller
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

        $data = RescueLog::query()
            ->with([
                    "user",
                    "vehicle.type",
                    "vehicle.brand",
                    "rescuer",
                    "rescue_service"
            ])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->whereHas('user', function($query) use ($queryString){
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
                    })
                    ->orWhereHas('rescuer', function($query) use ($queryString){
                        $query->where('name', 'like', '%' . $queryString . '%');
                    })
                    ->orWhereHas('rescue_service', function($query) use ($queryString){
                        $query->where('name', 'like', '%' . $queryString . '%');
                    })
                    ->orWhere('action', 'like', '%' . $queryString . '%');
                }
            })
            ->where(function($query) use ($request){
                if(!auth()->user()->hasRole('Admin'))
                {
                    $query->where('user_id', auth()->user()->id);
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => RescueLogListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('rescue_logs.index', ['page' => 1]);
        }

        return Inertia::render('Admin/RescueLog', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/RescueLog/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRescueLogRequest $request)
    {
       
        $recentlyCreated = RescueLog::where([
            "vehicle_id" => $request->input('vehicle_id'),
            "lat" => $request->input('lat'),
            "lng" => $request->input('lng'),
            "rescuer_id" => $request->input('rescuer_id'),
        ])
        ->where('created_at', '>=', now()->subSeconds(30))
        ->first();
        if(!$recentlyCreated)
        {
            $data = RescueLog::create(array_merge($request->validated(), [
                'user_id' => auth()->user()->id
            ]));
        }else{
            return new RescueLogListResource($recentlyCreated);
        }

        sleep(1);

        if ($request->wantsJson()) {
            return new RescueLogListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = RescueLog::with([
            "user",
            "vehicle.type",
            "rescuer",
            "rescue_service"
        ])->findOrFail($id);
        if ($request->wantsJson()) {
            return new RescueLogListResource($data);
        }
        return Inertia::render('Admin/RescueLog/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = RescueLog::findOrFail($id);
        if ($request->wantsJson()) {
            return new RescueLogListResource($data);
        }
        return Inertia::render('Admin/RescueLog/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRescueLogRequest $request, string $id)
    {
        $data = RescueLog::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

        if ($request->wantsJson()) {
            return (new RescueLogListResource($data))
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
        $data = RescueLog::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
