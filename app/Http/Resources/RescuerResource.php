<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RescuerResource extends JsonResource
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
            'id'                => $this->id,
            'name'              => $this->name,
            'address'           => $this->address, 
            'lat'               => $this->lat, 
            'lng'               => $this->lng, 
            'contact_number'    => $this->contact_number, 
            'messenger_name'    => $this->messenger_name,  
            'messenger_link'    => $this->messenger_link,
            'rescue_services'  => RescuerRescueServiceResource::collection($this->rescuerRescueService)
        ];
    }
}