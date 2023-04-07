<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOTPRequest extends FormRequest
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
            'first_name' => ['required'],
            'last_name' => ['required'],
            'middle_name' => ['required'],
            'gender' => ['required'],
            'province' => ['required'],
            'city' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'mobile_number' => ['required', 'unique:users,mobile_number', 'regex:/^(9)\d{9}$/i'],
            'password' => ['required', 'confirmed'],
        ];
    }
}
