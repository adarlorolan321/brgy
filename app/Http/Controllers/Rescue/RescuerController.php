<?php

namespace App\Http\Controllers\Rescue;

use App\Http\Controllers\Controller;
use App\Http\Resources\Rescue\RescuerListResource;
use App\Models\Rescue\Rescuer;
use App\Http\Requests\Rescue\StoreRescuerRequest;
use App\Http\Requests\Rescue\UpdateRescuerRequest;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RescuerController extends Controller
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

        $data = Rescuer::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('type', 'like', '%' . $queryString . '%')
                        ->orWhere('contact_number', 'like', '%' . $queryString . '%')
                        ->orWhere('is_contact_number_verified', 'like', '%' . $queryString . '%')
                        ->orWhere('email', 'like', '%' . $queryString . '%')
                        ->orWhere('messenger_link', 'like', '%' . $queryString . '%')
                        ->orWhere('latitude', 'like', '%' . $queryString . '%')
                        ->orWhere('longitude', 'like', '%' . $queryString . '%')
                        ->orWhere('name', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => RescuerListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('rescuers.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Rescuer', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Rescuer/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRescuerRequest $request)
    {
        $data = Rescuer::create($request->validated());

        $data->services()->sync($request->input('services', []));
        $data->load(['services']);
        sleep(1);

        if ($request->wantsJson()) {
            return new RescuerListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Rescuer::findOrFail($id);
        if ($request->wantsJson()) {
            return new RescuerListResource($data);
        }
        return Inertia::render('Admin/Rescuer/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Rescuer::findOrFail($id);
        if ($request->wantsJson()) {
            return new RescuerListResource($data);
        }
        return Inertia::render('Admin/Rescuer/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRescuerRequest $request, string $id)
    {
        $data = Rescuer::findOrFail($id);
        $data->update($request->validated());
        $data->services()->sync($request->input('services', []));
        $data->load(['services']);
        sleep(1);

        if ($request->wantsJson()) {
            return (new RescuerListResource($data))
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
        $data = Rescuer::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
