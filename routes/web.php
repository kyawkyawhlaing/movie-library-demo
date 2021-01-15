<?php

use Illuminate\Support\Facades\Route;
use App\Model\Movie;

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

Route::get('/{vue_capture?}', function () {
    return view('home');
})->where('vue_capture', '(.*)');

// Route::get("/",function() {
//     $movie = Movie::find(1)->genres()->orderBy('id')->get();
//     $arr   = [];
//     foreach ($movie as $item) {
//         array_push( $arr, $item->genre);
//     }; 
//     return $arr;
// });


