<?php

namespace App\Http\Requests\v1\Blowbagets;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlowbagetsRequest extends FormRequest
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
            'car_id'      => 'required|integer|min:1|exists:cars,id',
            'created_by'  => 'required|integer|min:1|exists:users,id',
            'break'       => 'required|integer|min:0|max:3',
            'lights'      => 'required|integer|min:0|max:3',
            'oil'         => 'required|integer|min:0|max:3',
            'water'       => 'required|integer|min:0|max:3',
            'battery'     => 'required|integer|min:0|max:3',
            'air'         => 'required|integer|min:0|max:3',
            'gas'         => 'required|integer|min:0|max:3',
            'engine'      => 'required|integer|min:0|max:3',
            'tools'       => 'required|integer|min:0|max:3',
            'self'        => 'required|integer|min:0|max:3',
        ];
    }
}
