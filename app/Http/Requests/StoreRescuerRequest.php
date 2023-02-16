<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRescuerRequest extends FormRequest
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
            'name'              => 'required|string',
            'address'           => 'required|string',
            'lat'               => 'required|numeric',
            'lng'               => 'required|numeric',
            'contact_number'    => 'required|string',
            'messenger_name'    => 'sometimes|string',
            'messenger_link'    => 'sometimes|string',
        ];
    }
}
