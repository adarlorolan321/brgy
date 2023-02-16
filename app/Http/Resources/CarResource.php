<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
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
            'brand'         => $this->brand,
            'model'         => $this->model,
            'year'          => $this->year,
            'car_type'      => $this->carType,
            'assigned_to'   => $this->assignedTo,
            'created_by'    => $this->createdBy,
            'plate_number'  => $this->plate_number
        ];
    }
}