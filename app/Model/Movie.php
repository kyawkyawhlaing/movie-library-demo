<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $fillable = [
        'user_id',
        'movie',
        'link',
        'director',
        'image',
        'rating',
        'summary',
        'duration',
        'cast',
        'releaseDate'
    ];

    public function genres()
    {
        return $this->belongsToMany('App\Model\Genre','genre_movie')->withTimestamps();
    }
    public function releases()
    {
        return $this->belongsToMany('App\Model\Release', 'movie_release')->withTimestamps();
    }
}
