<?php

namespace App\Http\Requests\Vehiclemodelfeature;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehicleModelFeatureRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "car_brand_id" => ["required"],
            "car_type_id" => ["required"],
            "model" => ["required"],
            "year" => ["required"],
            "color" => ["required"],
            "full_name" => ["required"],
        ];
    }
}
