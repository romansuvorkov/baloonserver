<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Catalog extends JsonResource
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
            'description' => $this->description,
            'price' => $this->price,
            'img' => $this->img,
        ];
    }
}
