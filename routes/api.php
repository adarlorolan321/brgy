<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlowbagetsController;
use App\Http\Controllers\DriveController;
use App\Http\Controllers\Dryver\DryverController;
use App\Http\Controllers\Insurance\InsuranceClaimController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\Promotion\PromotionController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\Repair\RepairController;
use App\Http\Controllers\Repair\RepairItemController;
use App\Http\Controllers\Rescue\RescueLogController;
use App\Http\Controllers\Rescue\RescuerController;
use App\Http\Controllers\Rescue\RescueServiceController;
use App\Http\Controllers\Tip\TipController;
use App\Http\Controllers\User\DriverController;
use App\Http\Controllers\Vehicle\VehicleBrandController;
use App\Http\Controllers\Vehicle\VehicleController;
use App\Http\Controllers\Vehicle\VehicleTypeController;
use App\Http\Controllers\Vehiclemodelfeature\VehicleModelFeatureController;
use App\Models\Vehiclemodelfeature\VehicleModelFeature;
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
    Route::post('/register-request-otp', [AuthController::class, 'registerRequestOtp'])->name('register-request-otp');
    Route::post('/register', [AuthController::class, 'register'])->name('register');

    Route::get('/provinces', [ProvinceController::class, 'index'])->name('provinces.index');
});
// End of Public Route


Route::prefix('v1')->name('api.')->middleware('auth:sanctum')->group(function () {

    Route::get('/my-rescue-request', [AuthController::class, 'myRescueRequest'])->name('myRescueRequest');
    Route::get('/my-active-vehicle', [AuthController::class, 'myActiveVehicle'])->name('myActiveVehicle');
    Route::get('/my-information', [AuthController::class, 'myInformation'])->name('myInformation');
    Route::patch('/license', [AuthController::class, 'updateLicense'])->name('user.license.update');
    
    
    Route::post('/media/upload', [MediaController::class, 'upload'])->name('media.upload');
    Route::get('/nearest-distance', [PromotionController::class, 'getNearest'])->name('nearest-distance');
    Route::resources([
        'vehicle_brands' => VehicleBrandController::class,
        'vehicle_types' => VehicleTypeController::class,
        'rescuers' => RescuerController::class,
        'vehicles' => VehicleController::class,
        'drivers' => DriverController::class,
        'repairs' => RepairController::class,
        'repair_items' => RepairItemController::class,
        'rescue_services' => RescueServiceController::class,
        'rescue_logs' => RescueLogController::class,
        'insurance_claims' => InsuranceClaimController::class,
        'tips' => TipController::class,
        'vehicle_model_feature' => VehicleModelFeatureController::class,
        'promotions' => PromotionController::class,
    ]);

    Route::post('/drive/start/{id}', [DriveController::class, 'startDrive'])->name('drive.start');
    Route::post('/drive/stop/{id}', [DriveController::class, 'stopDrive'])->name('drive.stop');
    Route::post('/drive/request_rescuer', [DriveController::class, 'requestRescuer'])->name('drive.request_rescue');

    
    Route::post('/blowbagets', [BlowbagetsController::class, 'store'])->name('blowbagets.store');
    Route::get('/blowbagets/user-data', [BlowbagetsController::class, 'userData'])->name('blowbagets.userData');
    Route::get('/my-vehicles', [VehicleController::class, 'getUserVehicle'])->name('my-vehicles');
    Route::get('/my-vehicle-logs', [AuthController::class, 'driveLogs'])->name('my-vehicles-logs');
    
});
