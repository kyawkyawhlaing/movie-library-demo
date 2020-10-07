<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::apiResource('movie','API\MovieController');
Route::post('login', 'Auth\LoginController@vuelogin');
Route::post('logout','Auth\LoginController@logout');
Route::get('insertMovie','backend\InsertMovieController@index');
Route::post('insertMovie','backend\InsertMovieController@store');

