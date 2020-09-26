<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});
// Route::get('movie', 'movieController@retrieve');
// Route::get('movie/{id}', 'movieController@singleRetrieve');
// Route::post('movie','movieController@create');
// Route::put('movie/{movie}','movieController@update');
// Route::delete('movie/{movie}', 'movieController@delete');

Route::apiResource('movie','API\MovieController');
Route::post('login', 'Auth\LoginController@vuelogin');
Route::post('logout','Auth\LoginController@logout');

