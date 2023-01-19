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
Route::prefix('dryver-app')->group(function () {
    Route::get('users', 'UserController@index');
    Route::post('users', 'UserController@store');
    Route::put('users/{id}', 'UserController@update');
    Route::get('users/{id}', 'UserController@show');
    Route::delete('users/{id}', 'UserController@destroy');
    Route::post('users/avatar/{id}', 'UserController@uploadPhoto');
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
