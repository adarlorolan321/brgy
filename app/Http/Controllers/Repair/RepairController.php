<?php

namespace App\Http\Controllers\Repair;

use App\Http\Controllers\Controller;
use App\Http\Resources\Repair\RepairListResource;
use App\Models\Repair\Repair;
use App\Http\Requests\Repair\StoreRepairRequest;
use App\Http\Requests\Repair\UpdateRepairRequest;
use App\Models\Media;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            ->with([])
            ->where('user_id', auth()->user()->id)
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    $query->where('mechanic_name', 'like', '%' . $queryString . '%')
                        ->orWhere('mechanic_contact_number', 'like', '%' . $queryString . '%')
                        ->orWhere('mechanic_address', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

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

        return Inertia::render('Admin/Repair', $props);
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
        $data = Repair::findOrFail($id);
        if ($request->wantsJson()) {
            return new RepairListResource($data);
        }
        return Inertia::render('Admin/Repair/Show', [
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

        
        if($request->has('images')) {
            $data->updateMedia($request->input('images', []), 'images');
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
