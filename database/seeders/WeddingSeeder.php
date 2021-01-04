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
            'img' => 'images/wedding1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img' => 'images/wedding2.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img' => 'images/wedding3.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img' => 'images/wedding4.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('wedding')->insert([
            'img' => 'images/wedding5.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
    }
}
