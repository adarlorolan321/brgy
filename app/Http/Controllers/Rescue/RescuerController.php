<?php

namespace App\Http\Controllers\Rescue;

use App\Http\Controllers\Controller;
use App\Http\Resources\Rescue\RescuerListResource;
use App\Models\Rescue\Rescuer;
use App\Http\Requests\Rescue\StoreRescuerRequest;
use App\Http\Requests\Rescue\UpdateRescuerRequest;
use App\Models\Media;
use App\Models\Rescue\RescueService;
use App\Models\Province;

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
            ->with(['services'])
            ->where(function ($query) use ($queryString){
                if ($queryString && $queryString != '') {
                    $query->where('type', 'like', '%' . $queryString . '%')
                        ->orWhere('contact_number', 'like', '%' . $queryString . '%')
                        ->orWhere('is_contact_number_verified', 'like', '%' . $queryString . '%')
                        ->orWhere('email', 'like', '%' . $queryString . '%')
                        ->orWhere('messenger_link', 'like', '%' . $queryString . '%')
                        ->orWhere('latitude', 'like', '%' . $queryString . '%')
                        ->orWhere('longitude', 'like', '%' . $queryString . '%')
                        ->orWhere('province', 'like', '%' . $queryString . '%')
                        ->orWhere('city', 'like', '%' . $queryString . '%')
                        ->orWhere('gender', 'like', '%' . $queryString . '%')
                        ->orWhere('name', 'like', '%' . $queryString . '%');
                }
            })
            ->when($request->has('province'), function($query) use ($request){
                $province = $request->input('province');
                $query->where('type', 'like', '%' . $province . '%');
            })
            ->when($request->has('city'), function($query) use ($request){
                $city = $request->input('city');
                $query->where('type', 'like', '%' . $city . '%');
            })
            ->when($request->has('service_id'), function($query) use ($request){
                $serviceId = $request->input('service_id');
                $query->whereHas('services', function($query) use ($serviceId){
                    $query->where('id', $serviceId);
                });
            })
            ->where(function ($query) use ($request) {
                if ($request->has('radius') && $request->has('lat') && $request->has('lng')) {
                    $markers = $this->getMarkersInRadius($request);
                    $query->whereBetween('latitude', [$markers["min_lat"], $markers["max_lat"]])
                        ->whereBetween('longitude', [$markers["min_lng"], $markers["max_lng"]]);
                }
            })
            ->when(count($sort) == 1, function ($query) use ($sort, $order) {
                $query->orderBy($sort[0], $order);
            })
            ->paginate($perPage)
            ->withQueryString();
        
        $data->getCollection()->transform(function($data) use ($request){
            $distance = 0;

            if ($request->has('radius') && $request->has('lat') && $request->has('lng')) {
                $pointA = [ "lat" => $request->input('lat'), "lng" => $request->input('lng')];
                $pointB = [ "lat" => $data->latitude, "lng" => $data->longitude];
                $distance = $this->calculateDistance($pointA, $pointB);
            }

            return array_merge($data->toArray(), [
                'distance' => $distance
            ]);
        });

        $services = RescueService::all();
        $provinces = Province::with(['cities'])->get();
        $props = [
            'data' => RescuerListResource::collection($data),
            'params' => $request->all(),
            'services' => $services,
            'provinces' => $provinces,
        ];

        if ($request->wantsJson()) {
            return [
                'data' => RescuerListResource::collection($data)->response()->getData(true),
                'params' => $request->all(),
            ];
        }

        if (count($data) <= 0 && $page > 1) {
            return redirect()->route('rescuers.index', ['page' => 1]);
        }

        return Inertia::render('Admin/Rescue/Index', $props);
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
        
        if (isset($request->input('image', [])['id'])) {
            Media::where('id', $request->input('image', [])['id'])
                ->update([
                    'model_id' => $data->id
                ]);
        }

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

    private function getMarkersInRadius(Request $request)
    {

        $lat = $request->float('lat', 0);
        $lng = $request->float('lng', 0);
        $radius = $request->float('radius', 0);
        // Convert radius from kilometers to miles
        $radius = $radius * 0.621371;
        // Calculate the maximum and minimum latitudes and longitudes based on the center point and the radius
        $maxLat = $lat + ($radius / 69);
        $minLat = $lat - ($radius / 69);
        $maxLng = $lng + ($radius / (69 * cos(deg2rad($lat))));
        $minLng = $lng - ($radius / (69 * cos(deg2rad($lat))));

        return ['min_lat' => $minLat,    'max_lat' => $maxLat,    'min_lng' => $minLng,    'max_lng' => $maxLng,];
    }

    public function calculateDistance($pointA, $pointB, $unit = "K")
    {
        // convert from degrees to radians
        $lat1 = $pointB['lat'];
        $lon1 = $pointB['lng'];

        $lat2 = $pointA['lat'];
        $lon2 = $pointA['lng'];
      
        $theta = $lon1 - $lon2;
        $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;
        $unit = strtoupper($unit);
      
        if ($unit == "K") {
            $km = $miles * 1.609344;

            if($km < 1) {
                return ($km * 100 ) . 'm';
            }
            return round($km, 2) . 'km';
        } else if ($unit == "N") {
            return ($miles * 0.8684);
        } else {
            return $miles;
        }
      }

   
}
