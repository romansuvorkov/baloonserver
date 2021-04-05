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
            'img640' => 'images/1child640.jpg',
            'img1280' => 'images/1child1280.jpg',
            'img1980' => 'images/1child1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/2child640.jpg',
            'img1280' => 'images/2child1280.jpg',
            'img1980' => 'images/2child1980.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/3child640.jpg',
            'img1280' => 'images/3child1280.jpg',
            'img1980' => null,
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

    }
}
