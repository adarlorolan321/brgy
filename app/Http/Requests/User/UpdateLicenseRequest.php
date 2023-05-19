<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateLicenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
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
            'license_number' => ['required'],
            'license_type' => ['required', Rule::in(['Student', 'Non-Professional', 'Professional'])],
            'expiration_date' => ['required'],
            'license_front' => ['required'],
            'license_back' => ['required'],
        ];
    }
}
