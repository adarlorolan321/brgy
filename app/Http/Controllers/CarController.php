<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Http\Requests\StoreCarRequest;
use App\Http\Requests\UpdateCarRequest;
use App\Http\Resources\CarResource;
use App\Models\CarRescueService;
use App\Models\RescueService;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Http\Request;
use Carbon\Carbon;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $rows_per_page = $request->get('rows_per_page') ? $request->get('rows_per_page') : 1000;

        $car = QueryBuilder::for(Car::class)
                ->allowedFilters([
                    AllowedFilter::exact('id'),
                    'name',
                    'address'
                ])
                ->allowedSorts([
                    'name',
                    'address'
                ])
                ->paginate($rows_per_page);

        if ($car) {
            return CarResource::collection($car);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCarRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCarRequest $request)
    {
        $car = Car::create($request->validated());

        CarResource::withoutWrapping();
        $carResource = new CarResource($car);

        return response()->json($carResource, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Car $car
     * @return \Illuminate\Http\Response
     */


    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCarRequest $request
     * @param  \App\Models\Car $car
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCarRequest $request, Int $id)
    {
        $car = Car::find($id);
        $car->update($request->validated());

        if ($car->save()) {
            CarResource::withoutWrapping();
            $rescuerResource = new CarResource($car);

            return response()->json($rescuerResource, 200);
        } else {
            return response()->json(
                [
                    'errors' => [
                        'message' => [
                            'Unable to edit Rescue Service ID '.$id
                        ]
                    ]
                ],
                422
            );    
        }

        return response()->json($car, 200);

    }

    /**p[]
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        Car::destroy($id);
        
        return response()->json(null, 204);
    }
}