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
            'description' => 'Украшение зала воздушными шарами из 124 шаров',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img640' => 'images/2birthday640.jpg',
            'img1280' => 'images/2birthday1280.jpg',
            'img1980' => 'images/2birthday1980.jpg',
            'description' => 'Украшение зала шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img640' => 'images/2birthday640.jpg',
            'img1280' => 'images/2birthday1280.jpg',
            'img1980' => 'images/2birthday1980.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);

    }


}
