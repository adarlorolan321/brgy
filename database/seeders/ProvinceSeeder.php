<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    public function run()
    {
        $provinces = [
            0 => [
                'id' => 1,
                'provDesc' => 'ILOCOS NORTE',
                'reg_id' => 1,
            ],
            1 => [
                'id' => 2,
                'provDesc' => 'ILOCOS SUR',
                'reg_id' => 1,
            ],
            2 => [
                'id' => 3,
                'provDesc' => 'LA UNION',
                'reg_id' => 1,
            ],
            3 => [
                'id' => 4,
                'provDesc' => 'PANGASINAN',
                'reg_id' => 1,
            ],
            4 => [
                'id' => 5,
                'provDesc' => 'BATANES',
                'reg_id' => 2,
            ],
            5 => [
                'id' => 6,
                'provDesc' => 'CAGAYAN',
                'reg_id' => 2,
            ],
            6 => [
                'id' => 7,
                'provDesc' => 'ISABELA',
                'reg_id' => 2,
            ],
            7 => [
                'id' => 8,
                'provDesc' => 'NUEVA VIZCAYA',
                'reg_id' => 2,
            ],
            8 => [
                'id' => 9,
                'provDesc' => 'QUIRINO',
                'reg_id' => 2,
            ],
            9 => [
                'id' => 10,
                'provDesc' => 'BATAAN',
                'reg_id' => 3,
            ],
            10 => [
                'id' => 11,
                'provDesc' => 'BULACAN',
                'reg_id' => 3,
            ],
            11 => [
                'id' => 12,
                'provDesc' => 'NUEVA ECIJA',
                'reg_id' => 3,
            ],
            12 => [
                'id' => 13,
                'provDesc' => 'PAMPANGA',
                'reg_id' => 3,
            ],
            13 => [
                'id' => 14,
                'provDesc' => 'TARLAC',
                'reg_id' => 3,
            ],
            14 => [
                'id' => 15,
                'provDesc' => 'ZAMBALES',
                'reg_id' => 3,
            ],
            15 => [
                'id' => 16,
                'provDesc' => 'AURORA',
                'reg_id' => 3,
            ],
            16 => [
                'id' => 17,
                'provDesc' => 'BATANGAS',
                'reg_id' => 4,
            ],
            17 => [
                'id' => 18,
                'provDesc' => 'CAVITE',
                'reg_id' => 4,
            ],
            18 => [
                'id' => 19,
                'provDesc' => 'LAGUNA',
                'reg_id' => 4,
            ],
            19 => [
                'id' => 20,
                'provDesc' => 'QUEZON',
                'reg_id' => 4,
            ],
            20 => [
                'id' => 21,
                'provDesc' => 'RIZAL',
                'reg_id' => 4,
            ],
            21 => [
                'id' => 22,
                'provDesc' => 'MARINDUQUE',
                'reg_id' => 5,
            ],
            22 => [
                'id' => 23,
                'provDesc' => 'OCCIDENTAL MINDORO',
                'reg_id' => 5,
            ],
            23 => [
                'id' => 24,
                'provDesc' => 'ORIENTAL MINDORO',
                'reg_id' => 5,
            ],
            24 => [
                'id' => 25,
                'provDesc' => 'PALAWAN',
                'reg_id' => 5,
            ],
            25 => [
                'id' => 26,
                'provDesc' => 'ROMBLON',
                'reg_id' => 5,
            ],
            26 => [
                'id' => 27,
                'provDesc' => 'ALBAY',
                'reg_id' => 6,
            ],
            27 => [
                'id' => 28,
                'provDesc' => 'CAMARINES NORTE',
                'reg_id' => 6,
            ],
            28 => [
                'id' => 29,
                'provDesc' => 'CAMARINES SUR',
                'reg_id' => 6,
            ],
            29 => [
                'id' => 30,
                'provDesc' => 'CATANDUANES',
                'reg_id' => 6,
            ],
            30 => [
                'id' => 31,
                'provDesc' => 'MASBATE',
                'reg_id' => 6,
            ],
            31 => [
                'id' => 32,
                'provDesc' => 'SORSOGON',
                'reg_id' => 6,
            ],
            32 => [
                'id' => 33,
                'provDesc' => 'AKLAN',
                'reg_id' => 7,
            ],
            33 => [
                'id' => 34,
                'provDesc' => 'ANTIQUE',
                'reg_id' => 7,
            ],
            34 => [
                'id' => 35,
                'provDesc' => 'CAPIZ',
                'reg_id' => 7,
            ],
            35 => [
                'id' => 36,
                'provDesc' => 'ILOILO',
                'reg_id' => 7,
            ],
            36 => [
                'id' => 37,
                'provDesc' => 'NEGROS OCCIDENTAL',
                'reg_id' => 7,
            ],
            37 => [
                'id' => 38,
                'provDesc' => 'GUIMARAS',
                'reg_id' => 7,
            ],
            38 => [
                'id' => 39,
                'provDesc' => 'BOHOL',
                'reg_id' => 8,
            ],
            39 => [
                'id' => 40,
                'provDesc' => 'CEBU',
                'reg_id' => 8,
            ],
            40 => [
                'id' => 41,
                'provDesc' => 'NEGROS ORIENTAL',
                'reg_id' => 8,
            ],
            41 => [
                'id' => 42,
                'provDesc' => 'SIQUIJOR',
                'reg_id' => 8,
            ],
            42 => [
                'id' => 43,
                'provDesc' => 'EASTERN SAMAR',
                'reg_id' => 9,
            ],
            43 => [
                'id' => 44,
                'provDesc' => 'LEYTE',
                'reg_id' => 9,
            ],
            44 => [
                'id' => 45,
                'provDesc' => 'NORTHERN SAMAR',
                'reg_id' => 9,
            ],
            45 => [
                'id' => 46,
                'provDesc' => 'SAMAR (WESTERN SAMAR)',
                'reg_id' => 9,
            ],
            46 => [
                'id' => 47,
                'provDesc' => 'SOUTHERN LEYTE',
                'reg_id' => 9,
            ],
            47 => [
                'id' => 48,
                'provDesc' => 'BILIRAN',
                'reg_id' => 9,
            ],
            48 => [
                'id' => 49,
                'provDesc' => 'ZAMBOANGA DEL NORTE',
                'reg_id' => 10,
            ],
            49 => [
                'id' => 50,
                'provDesc' => 'ZAMBOANGA DEL SUR',
                'reg_id' => 10,
            ],
            50 => [
                'id' => 51,
                'provDesc' => 'ZAMBOANGA SIBUGAY',
                'reg_id' => 10,
            ],
            51 => [
                'id' => 52,
                'provDesc' => 'CITY OF ISABELA',
                'reg_id' => 10,
            ],
            52 => [
                'id' => 53,
                'provDesc' => 'BUKIDNON',
                'reg_id' => 11,
            ],
            53 => [
                'id' => 54,
                'provDesc' => 'CAMIGUIN',
                'reg_id' => 11,
            ],
            54 => [
                'id' => 55,
                'provDesc' => 'LANAO DEL NORTE',
                'reg_id' => 11,
            ],
            55 => [
                'id' => 56,
                'provDesc' => 'MISAMIS OCCIDENTAL',
                'reg_id' => 11,
            ],
            56 => [
                'id' => 57,
                'provDesc' => 'MISAMIS ORIENTAL',
                'reg_id' => 11,
            ],
            57 => [
                'id' => 58,
                'provDesc' => 'DAVAO DEL NORTE',
                'reg_id' => 12,
            ],
            58 => [
                'id' => 59,
                'provDesc' => 'DAVAO DEL SUR',
                'reg_id' => 12,
            ],
            59 => [
                'id' => 60,
                'provDesc' => 'DAVAO ORIENTAL',
                'reg_id' => 12,
            ],
            60 => [
                'id' => 61,
                'provDesc' => 'COMPOSTELA VALLEY',
                'reg_id' => 12,
            ],
            61 => [
                'id' => 62,
                'provDesc' => 'DAVAO OCCIDENTAL',
                'reg_id' => 12,
            ],
            62 => [
                'id' => 63,
                'provDesc' => 'COTABATO (NORTH COTABATO)',
                'reg_id' => 13,
            ],
            63 => [
                'id' => 64,
                'provDesc' => 'SOUTH COTABATO',
                'reg_id' => 13,
            ],
            64 => [
                'id' => 65,
                'provDesc' => 'SULTAN KUDARAT',
                'reg_id' => 13,
            ],
            65 => [
                'id' => 66,
                'provDesc' => 'SARANGANI',
                'reg_id' => 13,
            ],
            66 => [
                'id' => 67,
                'provDesc' => 'COTABATO CITY',
                'reg_id' => 13,
            ],
            67 => [
                'id' => 68,
                'provDesc' => 'NCR, CITY OF MANILA, FIRST DISTRICT',
                'reg_id' => 14,
            ],
            68 => [
                'id' => 69,
                'provDesc' => 'CITY OF MANILA',
                'reg_id' => 14,
            ],
            69 => [
                'id' => 70,
                'provDesc' => 'NCR, SECOND DISTRICT',
                'reg_id' => 14,
            ],
            70 => [
                'id' => 71,
                'provDesc' => 'NCR, THIRD DISTRICT',
                'reg_id' => 14,
            ],
            71 => [
                'id' => 72,
                'provDesc' => 'NCR, FOURTH DISTRICT',
                'reg_id' => 14,
            ],
            72 => [
                'id' => 73,
                'provDesc' => 'ABRA',
                'reg_id' => 15,
            ],
            73 => [
                'id' => 74,
                'provDesc' => 'BENGUET',
                'reg_id' => 15,
            ],
            74 => [
                'id' => 75,
                'provDesc' => 'IFUGAO',
                'reg_id' => 15,
            ],
            75 => [
                'id' => 76,
                'provDesc' => 'KALINGA',
                'reg_id' => 15,
            ],
            76 => [
                'id' => 77,
                'provDesc' => 'MOUNTAIN PROVINCE',
                'reg_id' => 15,
            ],
            77 => [
                'id' => 78,
                'provDesc' => 'APAYAO',
                'reg_id' => 15,
            ],
            78 => [
                'id' => 79,
                'provDesc' => 'BASILAN',
                'reg_id' => 16,
            ],
            79 => [
                'id' => 80,
                'provDesc' => 'LANAO DEL SUR',
                'reg_id' => 16,
            ],
            80 => [
                'id' => 81,
                'provDesc' => 'MAGUINDANAO',
                'reg_id' => 16,
            ],
            81 => [
                'id' => 82,
                'provDesc' => 'SULU',
                'reg_id' => 16,
            ],
            82 => [
                'id' => 83,
                'provDesc' => 'TAWI-TAWI',
                'reg_id' => 16,
            ],
            83 => [
                'id' => 84,
                'provDesc' => 'AGUSAN DEL NORTE',
                'reg_id' => 17,
            ],
            84 => [
                'id' => 85,
                'provDesc' => 'AGUSAN DEL SUR',
                'reg_id' => 17,
            ],
            85 => [
                'id' => 86,
                'provDesc' => 'SURIGAO DEL NORTE',
                'reg_id' => 17,
            ],
            86 => [
                'id' => 87,
                'provDesc' => 'SURIGAO DEL SUR',
                'reg_id' => 17,
            ],
            87 => [
                'id' => 88,
                'provDesc' => 'DINAGAT ISLANDS',
                'reg_id' => 17,
            ],
        ];


        foreach ($provinces  as $key => $province) {
            Province::create([
                'id' => $province['id'],
                'name' => $province['provDesc'],
                'reg_id' => $province['reg_id'],
            ]);
        }
    }
}
