<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RescueServiceResource extends JsonResource
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
            'id'        => $this->id,
            'name'      => $this->name,
            'photo'     => $this->image,
            'rescuers'  => RescueServiceRescuerResource::collection($this->rescuerRescueService)
        ];
    }
}
