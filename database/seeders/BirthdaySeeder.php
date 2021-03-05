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
            'img' => 'images/birthday1.jpg',
            'description' => 'Украшение зала воздушными шарами из 124 шаров',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday2.jpg',
            'description' => 'Украшение зала шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday3.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday4.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday5.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);
        DB::table('birthday')->insert([
            'img' => 'images/birthday1.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday2.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday3.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday4.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday5.jpg',
            'description' => 'Украшение зала на день рождения шариками с обработкой hi-float',
            'price' => 1000,
        ]);
        DB::table('birthday')->insert([
            'img' => 'images/birthday1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday2.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('birthday')->insert([
            'img' => 'images/birthday3.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);


    }


}
