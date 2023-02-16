<?php

namespace App\Http\Resources\v1;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class BlowbagetsResource extends JsonResource
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
            'id'            => $this->id,
            'car_id'        => $this->car,
            'created_by'    => $this->createdBy,
            'break'         => $this->break,
            'lights'        => $this->lights,
            'oil'           => $this->oil,
            'water'         => $this->water,
            'battery'       => $this->battery,
            'air'           => $this->air,
            'gas'           => $this->gas,
            'engine'        => $this->engine,
            'tools'         => $this->tools,
            'self'          => $this->self
        ];
    }
}