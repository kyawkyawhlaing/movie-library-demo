<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
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
        /*passing data to corresponding blade file */
        $genres = Genre::select('genre', 'id')->get();
        $releases = Release::select('releaseYear', 'id')->get();
        return view('backend.movie.insertMovie', compact('genres', 'releases'));
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
            'image' => 'required|mimes: jpg,jpeg,png|max: 2048',
        ]);

        $name = $request->file('image');
        $imgPath =  $name->store('poster', 'public');

        $movie = new Movie([
            'movie'     => $request->get('movie'),
            'image'     => $imgPath,
            'rating'    => $request->get('rating'),
            'summary'   => $request->get('summary'),
            'duration'  => $request->get('duration'),
            'cast'      => $request->get('cast'),
            'releaseDate'      =>  $request->get('releaseDate'),
            'user_id'   => auth()->id(),
        ]);
        $movie->save();

        $name = $request->get('releaseYear');
        // if proerty is not found in the collection instance,return 404 page
        $release_year = Release::where('releaseYear', '=', $name)->firstOrFail();
        //attach or generate id into pivot table
        $movie->releases()->attach($release_year->id);

        if (!empty($request->input('genres'))) {
            $input = $request->input('genres');
            //insert resources into database table
            //attach or generate id into pivot table

            foreach ($input as $key => $value) {
                $genre = Genre::where('genre', '=', $value)->firstOrFail();
                $movie->genres()->attach($genre->id);
            }
        }
        //back 1 step and return message 
        return redirect()->back()->with('status', 'Created Successfully');
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
