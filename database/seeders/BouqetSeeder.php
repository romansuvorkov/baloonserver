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
            'description' => 'Подарочный букет из шаров',
            'price' => 2500,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/2bouqet640.jpg',
            'img1280' => 'images/2bouqet1280.jpg',
            'img1980' => 'images/2bouqet1980.jpg',
            'description' => 'Букет с фольгированными цифрами',
            'price' => 2400,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/3bouqet640.jpg',
            'img1280' => 'images/3bouqet1280.jpg',
            'img1980' => 'images/3bouqet1980.jpg',
            'description' => 'Букет из шаров',
            'price' => 3200,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/4bouqet640.jpg',
            'img1280' => 'images/4bouqet1280.jpg',
            'img1980' => 'images/4bouqet1980.jpg',
            'description' => 'Букет из шаров',
            'price' => 1500,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/5bouqet640.jpg',
            'img1280' => 'images/5bouqet1280.jpg',
            'img1980' => 'images/5bouqet1980.jpg',
            'description' => 'Букет из 9 цветов',
            'price' => 1300,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/6bouqet640.jpg',
            'img1280' => 'images/6bouqet1280.jpg',
            'img1980' => 'images/6bouqet1980.jpg',
            'description' => 'Кот с цветами',
            'price' => 1500,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/7bouqet640.jpg',
            'img1280' => 'images/7bouqet1280.jpg',
            'img1980' => 'images/7bouqet1980.jpg',
            'description' => 'Букет с фольгированной цифрой',
            'price' => 2500,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/8bouqet640.jpg',
            'img1280' => 'images/8bouqet1280.jpg',
            'img1980' => 'images/8bouqet1980.jpg',
            'description' => 'Букет в вазе',
            'price' => 1100,
        ]);

        DB::table('bouqet')->insert([
            'img640' => 'images/9bouqet640.jpg',
            'img1280' => 'images/9bouqet1280.jpg',
            'img1980' => 'images/9bouqet1980.jpg',
            'description' => 'Букет с сердцем',
            'price' => 1100,
        ]);

    }
}
