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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('movie', 'movieController@retrieve');
// Route::get('movie/{id}', 'movieController@singleRetrieve');
// Route::post('movie','movieController@create');
// Route::put('movie/{movie}','movieController@update');
// Route::delete('movie/{movie}', 'movieController@delete');

Route::apiResource('movie','API\MovieController');
