<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChildSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('child')->insert([
            'img' => 'images/ch_ex1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('child')->insert([
            'img' => 'images/ch_ex2.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('child')->insert([
            'img' => 'images/ch_ex3.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('child')->insert([
            'img' => 'images/ch_ex4.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('child')->insert([
            'img' => 'images/ch_ex5.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
    }
}
