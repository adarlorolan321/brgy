<?php

use App\Http\Controllers\Rescue\RescueServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Vehicle\VehicleBrandController;
use App\Http\Controllers\Vehicle\VehicleTypeController;
use App\Http\Controllers\Vehicle\VehicleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/






Route::middleware(['auth:sanctum'])->group(function () {
    Route::middleware(['role:Admin'])->group(function () {

        Route::get('/', function () {
            return Inertia::render('Welcome', []);
        })->name('welcome');

        // Route::get('/vehicle-index', function () {
        //     return Inertia::render('Admin/Vehicle/Index', []);
        // })->name('vehicle.index');

        Route::get('/dashboard', function () {
            return Inertia::render('Welcome', []);
        })->name('welcome');
        Route::get('/vehicle', function () {
            return Inertia::render('Vehicle', []);
        })->name('vehicle');


        Route::resources([
            'vehicle_brands' => VehicleBrandController::class,
            'vehicle_types' => VehicleTypeController::class,
            'vehicles' => VehicleController::class,
            'rescue_services' => RescueServiceController::class,
        ]);
    });
});
