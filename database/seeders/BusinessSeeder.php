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
            'img' => 'images/business1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('business')->insert([
            'img' => 'images/business2.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('business')->insert([
            'img' => 'images/business3.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('business')->insert([
            'img' => 'images/business4.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);

        DB::table('business')->insert([
            'img' => 'images/business5.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
        
        DB::table('business')->insert([
            'img' => 'images/business1.jpg',
            'description' => 'Тестовое описание',
            'price' => 1000,
        ]);
    }
}
