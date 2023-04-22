<?php

namespace App\Http\Requests\Repair;

use Illuminate\Foundation\Http\FormRequest;

class StoreRepairRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store repair");
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
            'images' => ['required', 'array'],
            'images.*.id' => ['required'],
            'items' => ['required', 'array'],
            'items.*.item' => ['required'],
            'items.*.amount' => ['required'],
            'items.*.image' => ['nullable'],
            'status' => ['nullable']
        ];
    }
}
