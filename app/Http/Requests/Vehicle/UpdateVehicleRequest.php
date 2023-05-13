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
            "vehicle_brand_id" => ["required", "exists:vehicle_brands,id"],
            "model" => ["required"],
            "year" => ["required"],
            "vehicle_type_id" => ["required", "exists:vehicle_types,id"],
            "assigned_to" => ["required", "exists:users,id"],
            "plate_number" => ["required"],
            'odometer' => ['nullable'],
            "color" => ["required"],
            
            "chassis_number" => ['required'],
            "engine_number" => ['required'],
            "orcr_number" => ['required'],
            "expiration_date" => ['required'],
            "insurance_company" => ['nullable'],
            "insurance_policy_number" => ['nullable'],
            
        ];
    }
}
