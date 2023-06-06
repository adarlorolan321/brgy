<?php

namespace App\Http\Controllers\Promotion;

use App\Http\Controllers\Controller;
use App\Http\Resources\Promotion\PromotionListResource;
use App\Models\Promotion\Promotion;
use App\Http\Requests\Promotion\StorePromotionRequest;
use App\Http\Requests\Promotion\UpdatePromotionRequest;
use App\Models\Media;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        
        $page = $request->input('page', 1); // default 1
        $perPage = $request->input('perPage', 5); // default 50
        $queryString = $request->input('query', null);
        $sort = explode('.', $request->input('sort', 'distance'));
        $order = $request->input('order', 'asc');

        $data = Promotion::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where('name', 'like', '%' . $queryString . '%')
                        ->orWhere('promoter_name', 'like', '%' . $queryString . '%')
                        ->orWhere('description', 'like', '%' . $queryString . '%')
                        ->orWhere('lat', 'like', '%' . $queryString . '%')
                        ->orWhere('lng', 'like', '%' . $queryString . '%')
                        ->orWhere('expiration_date', 'like', '%' . $queryString . '%')
                        ->orWhere('distance', 'like', '%' . $queryString . '%');
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $props = [
            'data' => PromotionListResource::collection($data),
            'params' => $request->all(),
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if(count($data) <= 0 && $page > 1)
        {
            return redirect()->route('promotion.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Promotion/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Promotion/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePromotionRequest $request)
    {

        $params = $request->validated();
        $data = Promotion::create($params);
        sleep(1);

        if (isset($request->input('image', [])['id'])) {
            Media::where('id', $request->input('image', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

        if ($request->wantsJson()) {
            return new PromotionListResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Promotion::findOrFail($id);
        if ($request->wantsJson()) {
            return new PromotionListResource($data);
        }
        return Inertia::render('Admin/Promotion/Show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = Promotion::findOrFail($id);
        if ($request->wantsJson()) {
            return new PromotionListResource($data);
        }
        return Inertia::render('Admin/Promotion/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePromotionRequest $request, string $id)
    {
        $data = Promotion::findOrFail($id);
        $data->update($request->validated());
        sleep(1);

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


        if ($request->wantsJson()) {
            return (new PromotionListResource($data))
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
        $data = Promotion::findOrFail($id);
        $data->delete();
        sleep(1);

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
