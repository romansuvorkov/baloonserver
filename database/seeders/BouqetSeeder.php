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

        DB::table('bouqet')->insert([
            'img640' => 'images/3bouqet640.jpg',
            'img1280' => 'images/3bouqet1280.jpg',
            'img1980' => 'images/3bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/4bouqet640.jpg',
            'img1280' => 'images/4bouqet1280.jpg',
            'img1980' => 'images/4bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/5bouqet640.jpg',
            'img1280' => 'images/5bouqet1280.jpg',
            'img1980' => 'images/5bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/6bouqet640.jpg',
            'img1280' => 'images/6bouqet1280.jpg',
            'img1980' => 'images/6bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/7bouqet640.jpg',
            'img1280' => 'images/7bouqet1280.jpg',
            'img1980' => 'images/7bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/8bouqet640.jpg',
            'img1280' => 'images/8bouqet1280.jpg',
            'img1980' => 'images/8bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/9bouqet640.jpg',
            'img1280' => 'images/9bouqet1280.jpg',
            'img1980' => 'images/9bouqet1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

    }
}
