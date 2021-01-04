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
            'img' => 'images/bouqet1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet2.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet3.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet4.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet5.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
        DB::table('bouqet')->insert([
            'img' => 'images/bouqet1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet2.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet3.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet4.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet5.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
        DB::table('bouqet')->insert([
            'img' => 'images/bouqet1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet2.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet3.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('bouqet')->insert([
            'img' => 'images/bouqet4.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
    }
}
