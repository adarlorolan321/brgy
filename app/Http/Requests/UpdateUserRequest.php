<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name'        => 'sometimes|string|nullable',                
            'middle_name'       => 'sometimes|string|nullable',               
            'family_name'       => 'sometimes|string|nullable',
            'type'              => 'sometimes|string|nullable|max:3',                      
            'email'             => 'sometimes|string|nullable|unique:users',          
            'password'          => 'sometimes|string|nullable',
            'photo'             => 'image|nullable',                    
            'gender'            => 'sometimes|string|nullable|max:1',                                 
            'address'           => 'sometimes|string|nullable',           
            'mobile_number'    => 'sometimes|string|nullable|unique:users',       
            'birthdate'          => 'sometimes|date|nullable',             
            'active'            => 'sometimes|boolean|nullable',
        ];
    }
}
