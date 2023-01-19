<?php

namespace Database\Factories;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name'        => $this->faker->firstName,
            'middle_name'       => $this->faker->lastName,
            'family_name'       => $this->faker->lastName,
            'type'              => $this->faker->randomElement(['A', 'CD', 'PD']),
            'gender'            => $this->faker->randomElement(['M', 'F', 'R']),
            'address'           => $this->faker->streetAddress.', '.$this->faker->city.', '.$this->faker->postcode,
            'mobile_number'     => $this->faker->phoneNumber,
            'birthdate'         => $this->faker->dateTimeThisCentury->format('Y-m-d'),
            'active'            => $this->faker->boolean, 
            'email'             => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password'          => Hash::make('123456'), // password
            'remember_token'    => Str::random(10),

            /*'name' => $this->faker->name(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),*/
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
