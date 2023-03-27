<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClassroomsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'number' => $this->number,
            'way_to' => $this->way_to,
            'destination' => $this->destination,
            'owner' => new TeachersResource($this->teacher),
            'subjects' => SubjectsResource::collection($this->subjects),
            'images' => ImagesResource::collection($this->images)
        ];
    }
}
