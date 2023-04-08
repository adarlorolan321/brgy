<?php

namespace Database\Seeders;

use App\Models\Rescue\Rescuer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class RescuerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lat = 6.230521852145857;
        $lng = 124.7135861210559;

        // Radius in meters
        $radius = 20000;

        // List to hold the marker coordinates
        $markers = array();

        // Generate 50 random points around the center within the radius
        for ($i = 0; $i < 500; $i++) {
            // Convert radius from meters to degrees
            $r = $radius / 111300.0;

            // Generate a random angle in radians
            $rand_angle = mt_rand(0, 359) * (M_PI / 180);

            // Calculate the new latitude and longitude
            $lat_new = $lat + ($r * cos($rand_angle));
            $lng_new = $lng + ($r * sin($rand_angle));

            // Add the new coordinates to the list of markers
            $markers[] = array('lat' => $lat_new, 'lng' => $lng_new);
        }

        foreach ($markers as $value) {
            $faker = Faker::create();
            $types = ["Business", "Individual"];
            $rescuer = Rescuer::create([
                "type" => $faker->randomElement($types),
                "name" => $faker->name,
                "contact_number" => $faker->phoneNumber,
                "is_contact_number_verified" => true,
                "email" => $faker->email,
                "messenger_link" => $faker->url('https', 'm.me') . '/' . $faker->userName,
                "latitude" => $value['lat'],
                "longitude" => $value['lng'],
            ]);

            $rescuer->sync([2, 4]);
        }
    }
}
