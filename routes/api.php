<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('v1')->group(function () {
    Route::resources([
        'users' => UserController::class,
        'rescue-services' => RescueServiceController::class,
        'rescuers' => RescuerController::class,
        'cars' => CarController::class,
        'blowbagets' => \v1\BlowbagetsController::class,
    ]);
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'UserController@login');
    //Route::post('signup', 'UserController@store');
    Route::post('change_password', 'UserController@change_password');

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'UserController@logout');
        //Route::get('user', 'AuthController@user');
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
