<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BirthdaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('birthday')->insert([
            'img640' => 'images/1birthday640.jpg',
            'img1280' => 'images/1birthday1280.jpg',
            'img1980' => 'images/1birthday1980.jpg',
            'description' => 'Цифры из шаров, букеты из шаров, гирлянда из шаров',
            'price' => 3200,
        ]);

        DB::table('birthday')->insert([
            'img640' => 'images/2birthday640.jpg',
            'img1280' => 'images/2birthday1280.jpg',
            'img1980' => 'images/2birthday1980.jpg',
            'description' => 'Фольгированные цифры, гелиевая арка, букеты из шаров на стол',
            'price' => 2800,
        ]);

        DB::table('birthday')->insert([
            'img640' => 'images/3birthday640.jpg',
            'img1280' => 'images/3birthday1280.jpg',
            'img1980' => 'images/3birthday1980.jpg',
            'description' => 'Цифры из шаров, 1 цифра 800 руб.',
            'price' => 1600,
        ]);

        DB::table('birthday')->insert([
            'img640' => 'images/4birthday640.jpg',
            'img1280' => 'images/4birthday1280.jpg',
            'img1980' => null,
            'description' => 'Фотозона из цифр и арки',
            'price' => 3800,
        ]);

    }


}
