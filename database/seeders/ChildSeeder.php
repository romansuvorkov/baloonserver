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
            'description' => 'Оформление десткого сада',
            'price' => 2700,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/2child640.jpg',
            'img1280' => 'images/2child1280.jpg',
            'img1980' => 'images/2child1980.jpg',
            'description' => 'Оформление десткого утренника',
            'price' => 2500,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/3child640.jpg',
            'img1280' => 'images/3child1280.jpg',
            'img1980' => null,
            'description' => 'Сюрприз на день рождения',
            'price' => 3500,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/4child640.jpg',
            'img1280' => 'images/4child1280.jpg',
            'img1980' => null,
            'description' => 'Оформление дня рождения',
            'price' => 1900,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/5child640.jpg',
            'img1280' => 'images/5child1280.jpg',
            'img1980' => null,
            'description' => 'Оформление танцевального конкурса',
            'price' => 8900,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/6child640.jpg',
            'img1280' => 'images/6child1280.jpg',
            'img1980' => null,
            'description' => 'День рождения, с фигурой',
            'price' => 2500,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/7child640.jpg',
            'img1280' => 'images/7child1280.jpg',
            'img1980' => null,
            'description' => 'Арка, букет из шаров',
            'price' => 4800,
        ]);

        DB::table('child')->insert([
            'img640' => 'images/8child640.jpg',
            'img1280' => 'images/8child1280.jpg',
            'img1980' => null,
            'description' => 'Оформление сюрприз',
            'price' => 1700,
        ]);

    }
}
