<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Movie;

class MovieAllController extends Controller
{
    public function showAll() {
        $movies = Movie::orderBy('id','desc')->get();
        return response()->json(["movies"=> $movies],200);
    }
    public function getGenres($id) {
        $movies = Movie::find($id)->genres()->orderBy('id')->get();
        return response()->json(["genres" => $movies]);
    }
}
