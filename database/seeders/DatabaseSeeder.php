<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BirthdaySeeder::class);
        $this->call(BouqetSeeder::class);
        $this->call(BusinessSeeder::class);
        $this->call(ChildSeeder::class);
        $this->call(WeddingSeeder::class);

        // \App\Models\User::factory(10)->create();
    }
}
