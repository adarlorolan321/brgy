<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'first_name'        => $this->first_name,
            'middle_name'       => $this->middle_name,
            'family_name'       => $this->family_name,
            'type'              => $this->type,         
            'type_text'         => $this->type_text,         
            'email'             => $this->email,
            'photo'             => $this->avatar,     
            'gender'            => $this->gender,       
            'sex_text'          => $this->sex_text,                               
            'address'           => $this->address,     
            'mobile_number'    => $this->mobile_number,     
            'birthdate'          => Carbon::parse($this->birthdate)->format('M d, Y'),
            'age'               => (((int) date('Y')) - ((int) Carbon::parse($this->birthdate)->format('Y'))),
            'active'            => $this->active,
            'created_at'        => (string) $this->created_at,
            'created_at_text'   => Carbon::parse($this->created_at)->format('M d, Y'),
            'updated_at'        => (string) $this->created_at,
            'updated_at_text'   => Carbon::parse($this->updated_at)->format('M d, Y')

                  
                


        ];
    }
}
