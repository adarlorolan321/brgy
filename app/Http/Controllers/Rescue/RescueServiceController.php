<?php

namespace App\Http\Controllers\Rescue;

use App\Http\Controllers\Controller;
use App\Http\Resources\Rescue\RescueServiceListResource;
use App\Models\Rescue\RescueService;
use App\Http\Requests\Rescue\StoreRescueServiceRequest;
use App\Http\Requests\Rescue\UpdateRescueServiceRequest;
use App\Models\Media;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RescueServiceController extends Controller
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

        $data = RescueService::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('name', 'like', '%' . $queryString . '%');
                    //     ->orWhere('column', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => RescueServiceListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('rescue_services.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Rescue/Service/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/RescueService/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRescueServiceRequest $request)
    {
        $data = RescueService::create($request->validated());
        if (isset($request->input('icon', [])['id'])) {
            Media::where('id', $request->input('icon', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }
        if ($request->wantsJson()) {
            return new RescueServiceListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = RescueService::findOrFail($id);
        if ($request->wantsJson()) {
            return new RescueServiceListResource($data);
        }
        return Inertia::render('Admin/RescueService/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = RescueService::findOrFail($id);
        if ($request->wantsJson()) {
            return new RescueServiceListResource($data);
        }
        return Inertia::render('Admin/RescueService/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRescueServiceRequest $request, string $id)
    {
        $data = RescueService::findOrFail($id);
        $data->update($request->validated());
        if (isset($request->input('icon', [])['id'])) {
            if ($request->input('icon', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('icon');
            }
            Media::where('id', $request->input('icon', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        } else {
            $data->clearMediaCollection('icon');
        }

        if ($request->wantsJson()) {
            return (new RescueServiceListResource($data))
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
        $data = RescueService::findOrFail($id);
        $data->delete();

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
