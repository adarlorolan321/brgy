<?php

namespace App\Http\Requests\Rescue;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRescuerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store rescuer");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "type" => ["required", Rule::in(['Business', 'Individual'])],
            "name" => ["required"],
            "contact_number" => ["required"],
            "is_contact_number_verified" => ["required"],
            "email" => ["required", "email"],
            "messenger_link" => ["required", "url"],
            "latitude" => ["required"],
            "longitude" => ["required"],
            "services" => ['required', 'array'],
            "services.*" => ['exists:rescue_services,id']
        ];
    }
}
