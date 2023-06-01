<?php

namespace App\Http\Requests\Rescue;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRescueLogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update rescue_log");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "vehicle_id" => ["nullable"],
            "lat" => ["required"],
            "lng" => ["required"],
            "rescuer_id" => ["required"],
            "rescue_service_id" => ["required"],
            "action" => ["required"],
        ];
    }
}
