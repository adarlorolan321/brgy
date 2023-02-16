<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCarRequest extends FormRequest
{
    /**
     * Determine if the rescue service is authorized to make this request.
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
            'brand'         => 'sometimes|string',
            'model'         => 'sometimes|string',
            'year'          => 'sometimes|numeric',
            'car_type_id'   => 'sometimes|numeric|min:1|exists:cars,id',
            'assigned_to'   => 'sometimes|numeric|min:1|exists:users,id',
            'created_by'    => 'sometimes|numeric|min:1|exists:users,id',
            'plate_number'  => 'sometimes|string',
        ];
    }
}
