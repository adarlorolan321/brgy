<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DriveController;
use App\Http\Controllers\Dryver\DryverController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\Rescue\RescuerController;
use App\Http\Controllers\Rescue\RescueServiceController;
use App\Http\Controllers\Vehicle\VehicleBrandController;
use App\Http\Controllers\Vehicle\VehicleController;
use App\Http\Controllers\Vehicle\VehicleTypeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public Route
Route::prefix('v1')->name('api.')->group(function () {
    Route::post('/login-request-otp', [AuthController::class, 'loginRequestOtp'])->name('login-request-otp');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});
// End of Public Route


Route::prefix('v1')->name('api.')->middleware('auth:sanctum')->group(function () {
    Route::post('/media/upload', [MediaController::class, 'upload'])->name('media.upload');

    Route::resources([
        'vehicle_brands' => VehicleBrandController::class,
        'vehicle_types' => VehicleTypeController::class,
        'rescuers' => RescuerController::class,
        'vehicles' => VehicleController::class,
        'dryver' => DryverController::class,
        'rescue_services' => RescueServiceController::class,
    ]);

    Route::post('/drive/start/{id}', [DriveController::class, 'startDrive'])->name('drive.start');
});
