<?php

namespace App\Http\Requests\Insurance;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInsuranceClaimRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update insurance_claim");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "vehicle_id" => ["required", 'exists:vehicles,id'],
            "police_station_address" => ["required"],
            "police_station_contact_number" => ["required"],
            "status" => ["required"],
            "amount" => ["required"],
            "reason" => ["required"],
            "police_blotter_images" => ['required', 'array'],
            "police_blotter_images.*.id" => ['required'],
            "vehicle_damage_images" => ['required', 'array'],
            "vehicle_damage_images.*.id" => ['required'],
        ];
    }
}
