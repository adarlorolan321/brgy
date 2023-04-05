<?php

namespace App\Http\Requests\Vehicle;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update vehicle");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "vehicle_brand_id" => ["required"],"model" => ["required"],"year" => ["required"],"vehicle_type_id" => ["required"],"assigned_to" => ["required"],"plate_number" => ["required"],"color" => ["required"],
        ];
    }
}
