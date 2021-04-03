<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BouqetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bouqet')->insert([
            'img640' => 'images/1bouqet640.jpg',
            'img1280' => 'images/1bouqet1280.jpg',
            'img1980' => 'images/1bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/2bouqet640.jpg',
            'img1280' => 'images/2bouqet1280.jpg',
            'img1980' => 'images/2bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

    }
}
