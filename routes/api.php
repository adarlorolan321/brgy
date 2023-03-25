<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MediaController;
use Illuminate\Http\Request;
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
});
