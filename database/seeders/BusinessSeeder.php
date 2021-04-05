<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BusinessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('business')->insert([
            'img640' => 'images/1business640.jpg',
            'img1280' => 'images/1business1280.jpg',
            'img1980' => null,
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('business')->insert([
            'img640' => 'images/2business640.jpg',
            'img1280' => 'images/2business1280.jpg',
            'img1980' => null,
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

    }
}
