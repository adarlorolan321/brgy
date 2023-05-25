<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreDriverRequest;
use App\Http\Requests\User\UpdateDriverRequest;
use App\Http\Resources\User\DriverResource;
use App\Models\Media;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Province;
use App\Models\City;
use App\Models\Vehicle\VehicleBrand;
use App\Models\Vehicle\VehicleType;

class DriverController extends Controller
{
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $page = $request->input('page', 1); // default 1
        $perPage = $request->input('perPage', 50); // default 50

        $queryString = $request->input('query', null);
        $type = $request->input('role', null);

        $sort = explode('.', $request->input('sort', 'id'));
        $order = $request->input('order', 'asc');

        $data = User::query()
            ->with([])
            ->where(function ($query) use ($queryString) {
                if ($queryString && $queryString != '') {
                    // filter result
                    $query->where(DB::raw("CONCAT(first_name, ' ', middle_name, ' ', last_name)"), 'like', '%' . $queryString . '%')
                        ->orWhere('gender', 'like', '%' . $queryString . '%')
                        ->orWhere('province', 'like', '%' . $queryString . '%')
                        ->orWhere('city', 'like', '%' . $queryString . '%')
                        ->orWhere('email', 'like', '%' . $queryString . '%')
                        ->orWhere('mobile_number', 'like', '%' . $queryString . '%');
                }
            })
            ->whereHas('roles', function($query){
                $query->whereIn('name', ["Private Driver", "Company Driver"]);
            })
            ->where(function($query) use ($type){
                if($type && $type != '')
                {
                    $query->whereHas('roles', function($query) use ($type){
                        $query->where('name', $type);
                    });
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();

        $provinces = Province::with(['cities'])->get();
        $props = [
            'data' => DriverResource::collection($data),
            'params' => $request->all(),
            'provinces' => $provinces,
        ];

        if ($request->wantsJson()) {
            return json_encode($props);
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('drivers.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Dryver/Index', $props);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Driver/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDriverRequest $request)
    {
        $data = User::create(array_merge($request->validated(), [
            'password' => bcrypt($request->input('password'))
        ]));
        $data->syncRoles([$request->input('role')]);

        //Upload Profile Photo
        if (isset($request->input('profile_photo', [])['id'])) {
            Media::where('id', $request->input('profile_photo', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

          //Upload Profile Photo
          if (isset($request->input('license_front', [])['id'])) {
            Media::where('id', $request->input('license_front', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

         //Upload Profile Photo
         if (isset($request->input('license_back', [])['id'])) {
            Media::where('id', $request->input('license_back', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

        
        if ($request->wantsJson()) {
            return new DriverResource($data);
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = User::with([
            'repairs' => ['vehicle' => ['brand', 'type']],
            'driveLogs' => ['vehicle' => ['brand', 'type']],
            'rescueLogs' => ['vehicle' => ['brand', 'type'], 'rescuer'],
        ])->findOrFail($id);
        if ($request->wantsJson()) {
            return new DriverResource($data);
        }

        $brands = VehicleBrand::all();
        $types = VehicleType::all();
        return Inertia::render('Admin/Dryver/Show', [
            'data' => $data,
            'brands' => $brands,
            'types' => $types,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        $data = User::findOrFail($id);
        if ($request->wantsJson()) {
            return new DriverResource($data);
        }
        return Inertia::render('Admin/Driver/Edit', [
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDriverRequest $request, string $id)
    {
        $data = User::findOrFail($id);
        $data->update(array_merge($request->validated(), [
            'password' => bcrypt($request->input('password'))
        ]));
        $data->syncRoles([$request->input('role')]);
        
        
        if (isset($request->input('profile_photo', [])['id'])) {
            if ($request->input('profile_photo', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('profile_photo');
            }
            Media::where('id', $request->input('profile_photo', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        } else {
            $data->clearMediaCollection('profile_photo');
        }
         
        if (isset($request->input('license_front', [])['id'])) {
            if ($request->input('license_front', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('license_front');
            }
            Media::where('id', $request->input('license_front', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        } else {
            $data->clearMediaCollection('license_front');
        }

        if (isset($request->input('license_back', [])['id'])) {
            if ($request->input('license_back', [])['model_id'] != $data->id) {
                $data->clearMediaCollection('license_back');
            }
            Media::where('id', $request->input('license_back', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        } else {
            $data->clearMediaCollection('license_back');
        }

        if ($request->wantsJson()) {
            return (new DriverResource($data))
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
        $data = User::findOrFail($id);
        $data->delete();
        

        if ($request->wantsJson()) {
            return response(null, 204);
        }
        return redirect()->back();
    }
}
