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
            'description' => 'Гелевая арка и букеты из шаров',
            'price' => 1800,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/2wedding640.jpg',
            'img1280' => 'images/2wedding1280.jpg',
            'img1980' => 'images/2wedding1980.jpg',
            'description' => 'Фигура лебеди - 1500 руб. Тканевое оформление стульев и столов от 4000 руб.',
            'price' => 5500,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/3wedding640.jpg',
            'img1280' => 'images/3wedding1280.jpg',
            'img1980' => 'images/3wedding1980.jpg',
            'description' => 'Фигура сердце, букеты из шаров, арка из гелиевых шаров',
            'price' => 4500,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/4wedding640.jpg',
            'img1280' => 'images/4wedding1280.jpg',
            'img1980' => 'images/4wedding1980.jpg',
            'description' => 'Тканевое оформление, сердце из шаров',
            'price' => 5500,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/5wedding640.jpg',
            'img1280' => 'images/5wedding1280.jpg',
            'img1980' => 'images/5wedding1980.jpg',
            'description' => 'Сердце из шаров, фигуры жениха и невесты, букеты из шаров',
            'price' => 2900,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/6wedding640.jpg',
            'img1280' => 'images/6wedding1280.jpg',
            'img1980' => null,
            'description' => 'Фигуры из шаров, оформление столов',
            'price' => 2900,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/7wedding640.jpg',
            'img1280' => 'images/7wedding1280.jpg',
            'img1980' => null,
            'description' => 'Фигура обручальные кольца, букеты из шаров,',
            'price' => 2900,
        ]);

        DB::table('wedding')->insert([
            'img640' => 'images/8wedding640.jpg',
            'img1280' => 'images/8wedding1280.jpg',
            'img1980' => 'images/8wedding1980.jpg',
            'description' => 'Фигура обручальные кольца, букеты из шаров,',
            'price' => 2900,
        ]);
    }
}
