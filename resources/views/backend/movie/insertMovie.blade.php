@extends('layouts.master')
@section('title','InsertMovie')
@section('content')
    
<div>
    <div class="row">
        <div class="col-6 cover d-flex align-items-center">
            <div class="col-10 mx-auto zindex">
                <h1>Feel Free</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem expedita ea ut error accusantium delectus id, itaque autem! Temporibus voluptatem ipsa excepturi dolor, dicta illo voluptatibus quos! Architecto, commodi?</p>
            </div>
        </div>
    <form method="POST" class="col-5 mx-auto" enctype="multipart/form-data">
     @csrf
     @include('alert') 
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="Movie">Movie</label>
            <input type="text" name="movie" class="form-control" id="Movie">
            </div>
            <div class="form-group col-md-6">
                <label for="Cast">Cast</label>
                <input type="text" name="cast" class="form-control" id="Cast">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="Rating">Rating</label>
                <input type="number" name="rating" class="form-control" id="Rating" step="any" min="0" max="10">
            </div>
            {{-- <div class="form-group col-md-4">
                <label for="Genre">Genre</label>
                <input type="text" name="genre" class="form-control" id="Genre">
            </div> --}}
            <div class="form-group col-md-4">
                <label for="Duration">Duration</label>
                <input type="text" name="duration" class="form-control" id="Duration">
            </div>
        </div>
        <div class="col-12 my-2">
            <h3>Movie Genre</h3>
            @foreach ($genres as $item)
            <div class="form-check form-check-inline col-2">
                <input class="form-check-input" type="checkbox" name="genres[]" id="checkbox{{$item->id}}" value="{{$item->genre}}">
                <label class="form-check-label" for="checkbox{{$item->id}}">{{$item->genre}}</label>
            </div>              
            @endforeach
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Summary</span>
            </div>
            <textarea class="form-control" name="summary"></textarea>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="ReleaseDate">Release Date</label>
                <input type="date" name="releaseDate" class="form-control" id="ReleaseDate">
            </div>
            <div class="form-group col-md-4">
                <label for="ReleaseYear">Release Year</label>
                {{-- <input type="number" name="releaseYear" class="form-control" id="ReleaseYear"> --}}
                <select class="form-control" name="releaseYear" id="ReleaseYear">
                    <option value="" selected>Release Year</option>
                    @foreach ($releases as $release)
                    <option value="{{ $release->releaseYear }}">
                        {{ $release->releaseYear }}
                    </option>   
                    @endforeach
                </select>
            </div>
        </div>
        <div class="form-group">
            <input type="file" name="image" class="form-control-file">
        </div>
        <button type="submit" class="btn btn-outline-danger">Insert</button>
        <a href="{{url('logout')}}" style="float: right; font-weight: 600; color:black;">Logout</a>
    </form>
    </div>

</div>

@endsection