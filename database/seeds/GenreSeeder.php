<?php

use Illuminate\Database\Seeder;
use App\Model\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genres = [
            'Adventure', 'Action', 'Adult', 'Animation',
            'Comedy', 'Crime', 'Drama', 'Family',
            'Fantasy', 'Love', 'Mystery', 'Romance',
            'Sci-Fi', 'Thriller', 'Horror','Western'
        ];
        foreach ($genres as $genre) {
            Genre::insert([
                'genre' => $genre
            ]);
        }
    }
}
