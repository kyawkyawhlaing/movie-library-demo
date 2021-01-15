<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('movie', 'API\MovieController');
Route::get('getAllmovies', 'API\MovieAllController@showAll');
Route::get('getAllmovies/{id}', 'API\MovieAllController@getGenres');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::get('getMovieData', 'backend\InsertDataTableController@index');
Route::middleware('auth:sanctum')->group(function () {
    Route::get('insertMovie', 'backend\InsertMovieController@index');
    Route::post('insertMovie', 'backend\InsertMovieController@store');
    Route::delete('getMovieData/{id}', 'backend\InsertDataTableController@destroy');
});



