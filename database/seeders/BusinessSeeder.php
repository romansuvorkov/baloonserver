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
            'description' => 'Гирлянда и фонтаны из шаров',
            'price' => 6600,
        ]);

        DB::table('business')->insert([
            'img640' => 'images/2business640.jpg',
            'img1280' => 'images/2business1280.jpg',
            'img1980' => null,
            'description' => 'Гирлянда (цена указана за метр)',
            'price' => 320,
        ]);

        DB::table('business')->insert([
            'img640' => 'images/3business640.jpg',
            'img1280' => 'images/3business1280.jpg',
            'img1980' => null,
            'description' => 'Гирлянда (цена указана за метр)',
            'price' => 320,
        ]);

        DB::table('business')->insert([
            'img640' => 'images/4business640.jpg',
            'img1280' => 'images/4business1280.jpg',
            'img1980' => 'images/4business1280.jpg',
            'description' => 'Гирлянда (цена указана за метр)',
            'price' => 320,
        ]);

        DB::table('business')->insert([
            'img640' => 'images/5business640.jpg',
            'img1280' => 'images/5business1280.jpg',
            'img1980' => 'images/5business1280.jpg',
            'description' => 'Композиция из шаров, 1 шт',
            'price' => 450,
        ]);

        DB::table('business')->insert([
            'img640' => 'images/6business640.jpg',
            'img1280' => 'images/6business1280.jpg',
            'img1980' => null,
            'description' => 'Фонтан из шаров',
            'price' => 2500,
        ]);

    }
}
