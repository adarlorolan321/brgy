<?php

namespace App\Http\Controllers\Repair;

use App\Http\Controllers\Controller;
use App\Http\Requests\Repair\StoreRepairItemRequest;
use App\Http\Requests\Repair\UpdateRepairItemRequest;
use App\Http\Resources\RepairItemListResource;
use App\Models\Media;
use App\Models\Repair\Repair;
use App\Models\Repair\RepairItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RepairItemController extends Controller
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

        $data = RepairItem::query()
            ->with([])
            ->where(function($query) use ($request){
                if(!auth()->user()->hasRole('Admin'))
                {
                    $query->where('user_id', auth()->user()->id);
                }
            })
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    $query->where('item', 'like', '%' . $queryString . '%')
                        ->orWhere('amount', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => RepairItemListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('repair.items.index', ['page' => 1]);
        }

        return Inertia::render('Admin/RepairItem', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/RepairItem/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRepairItemRequest $request)
    {
        $data = RepairItem::create(array_merge($request->validated(), ['user_id' => auth()->user()->id]));

        if (isset($request->input('image', [])['id'])) {
            Media::where('id', $request->input('image', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }
        $data->refresh();


        $repair = Repair::with(['items'])->where('id', $request->input('repair_id'))->first();
        $total_amount = $repair->items->sum('amount');
        $repair->update([
            'total_amount' => $total_amount
        ]);

        if ($request->wantsJson()) {
            return new RepairItemListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = RepairItem::with([])->findOrFail($id);
        if ($request->wantsJson()) {
            return new RepairItemListResource($data);
        }
        return Inertia::render('Admin/RepairItem/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = RepairItem::findOrFail($id);
        if ($request->wantsJson()) {
            return new RepairItemListResource($data);
        }
        return Inertia::render('Admin/RepairItem/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRepairItemRequest $request, string $id)
    {
        $data = RepairItem::findOrFail($id);
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
        
        $repair = Repair::with(['items'])->where('id', $request->input('repair_id'))->first();
        $total_amount = $repair->items->sum('amount');
        $repair->update([
            'total_amount' => $total_amount
        ]);

        if ($request->wantsJson()) {
            return (new RepairItemListResource($data))
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
        $data = RepairItem::findOrFail($id);
        $data->delete();

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
