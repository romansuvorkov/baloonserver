<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WeddingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('wedding')->insert([
            'img640' => 'images/1wedding640.jpg',
            'img1280' => 'images/1wedding1280.jpg',
            'img1980' => 'images/1wedding1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/2wedding640.jpg',
            'img1280' => 'images/2wedding1280.jpg',
            'img1980' => 'images/2wedding1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/3wedding640.jpg',
            'img1280' => 'images/3wedding1280.jpg',
            'img1980' => 'images/3wedding1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/4wedding640.jpg',
            'img1280' => 'images/4wedding1280.jpg',
            'img1980' => 'images/4wedding1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/5wedding640.jpg',
            'img1280' => 'images/5wedding1280.jpg',
            'img1980' => 'images/5wedding1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
    }
}
