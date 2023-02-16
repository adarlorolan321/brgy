<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRescuerRequest extends FormRequest
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
            'name'           => 'sometimes|string',
            'address'        => 'sometimes|string',
            'lat'            => 'sometimes|numeric',
            'lng'            => 'sometimes|numeric',
            'contact_number' => 'sometimes|string',
            'messenger_name' => 'sometimes|string',
            'messenger_link' => 'sometimes|string',
        ];
    }
}
