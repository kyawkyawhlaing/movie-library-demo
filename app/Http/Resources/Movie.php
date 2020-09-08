<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Movie extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'movie' => $this->movie,
            'image' => $this->image,
            'rating' => $this->rating,
            'duration' => $this->duration,
            'cast'    => $this->cast,
        ];
    }
}
