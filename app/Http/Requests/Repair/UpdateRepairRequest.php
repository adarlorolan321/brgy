<?php

namespace App\Http\Requests\Repair;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRepairRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("update repair");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "mechanic_name" => ["required"],
            "mechanic_contact_number" => ["required"],
            "mechanic_address" => ["required"],
            'vehicle_id' => ['required'],
            'total_amount' => ['required'],
            'item' => ['nullable'],
            'status' => ['nullable']
        ];
    }
}
