<?php

namespace App\Http\Requests\Tip;

use Illuminate\Foundation\Http\FormRequest;

class StoreTipRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->can("store tip");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required"],"content" => ["required"],
        ];
    }
}
