<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Movie;
use App\Model\Release;
use App\Model\Genre;

class InsertMovieController extends Controller
{

    public function __construct()
    {
        // 
    }

    public function index()
    {
        $genres = Genre::select('genre', 'id')->get();
        $releases = Release::select('releaseYear', 'id')->get();
        return response()->json([
            'genres' => $genres,
            'releases' => $releases
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'movie' => 'required',
            'file' => 'required|file|mimes: jpg,jpeg,png|max: 2048',
        ]);

        //retrieve uploaded file object
        $file = $request->file('file');
        $file = $request->file;

        //get original name
        // $fileName = $request->file('file')->getClientOriginalName();
        // $fileName = $request->file->getClientOriginalName(); 

        //store upload file in storage with original name
        $imgPath =  $file->storeAs('posters', $file->getClientOriginalName(), 'public');

        $movie = Movie::create([
            'movie'     => $request->get('movie'),
            'image'     => $imgPath,
            'director'  => $request->get('director'),
            'link'      => $request->get('link'),
            'rating'    => $request->get('rating'),
            'summary'   => $request->get('summary'),
            'duration'  => $request->get('duration'),
            'cast'      => $request->get('cast'),
            'releaseDate'      =>  $request->get('releaseDate'),
            'user_id'   => 1,
        ]);

        // $name = $request->get('releaseYear');
        $name = $request->get('releaseDate');
        $explodeDate  = explode("-", $name);
        $getYear = $explodeDate[0];
        // if property is not found in the collection instance,return 404 page
        $release_year = Release::where('releaseYear', '=', $getYear)->firstOrFail();
        if ($release_year) {
            //attach or generate id into pivot table
            $movie->releases()->attach($release_year->id);
        } else {
            Release::create([
                'releaseYear' => $getYear
            ]);
            //attach or generate id into pivot table
            $movie->releases()->attach($release_year->id);
        }



        if (!empty($request->input('genres'))) {
            $input = $request->input('genres');
            //insert resources into database table
            //attach or generate id into pivot table
            //input values aren't array type
            $arr = explode(",", $input);

            foreach ($arr as $key => $value) {
                $genre = Genre::where('genre', '=', $value)->firstOrFail();
                $movie->genres()->attach($genre->id);
            }
        }
        return response()->json(["message" => "Created Successfully!"], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
