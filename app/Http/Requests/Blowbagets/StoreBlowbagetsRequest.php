<?php

namespace App\Http\Requests\Blowbagets;

use Illuminate\Foundation\Http\FormRequest;

class StoreBlowbagetsRequest extends FormRequest
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
            'vehicle_id' => ['required', 'exists:vehicles,id'],
            'break' => ['required', 'numeric', 'min:0', 'max:3'],
            'lights' => ['required', 'numeric', 'min:0', 'max:3'],
            'oil' => ['required', 'numeric', 'min:0', 'max:3'],
            'water' => ['required', 'numeric', 'min:0', 'max:3'],
            'battery' => ['required', 'numeric', 'min:0', 'max:3'],
            'air' => ['required', 'numeric', 'min:0', 'max:3'],
            'gas' => ['required', 'numeric', 'min:0', 'max:3'],
            'engine' => ['required', 'numeric', 'min:0', 'max:3'],
            'tools' => ['required', 'numeric', 'min:0', 'max:3'],
            'self' => ['required', 'numeric', 'min:0', 'max:3'],
        ];
    }
}
