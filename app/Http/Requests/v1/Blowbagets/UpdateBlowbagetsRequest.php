<?php

namespace App\Http\Requests\v1\Blowbagets;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBlowbagetsRequest extends FormRequest
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
            'car_id'      => 'sometimes|integer|min:1|exists:cars,id',
            'created_by'  => 'sometimes|integer|min:1|exists:users,id',
            'break'       => 'sometimes|integer|min:0|max:3',
            'lights'      => 'sometimes|integer|min:0|max:3',
            'oil'         => 'sometimes|integer|min:0|max:3',
            'water'       => 'sometimes|integer|min:0|max:3',
            'battery'     => 'sometimes|integer|min:0|max:3',
            'air'         => 'sometimes|integer|min:0|max:3',
            'gas'         => 'sometimes|integer|min:0|max:3',
            'engine'      => 'sometimes|integer|min:0|max:3',
            'tools'       => 'sometimes|integer|min:0|max:3',
            'self'        => 'sometimes|integer|min:0|max:3',
        ];
    }
}
