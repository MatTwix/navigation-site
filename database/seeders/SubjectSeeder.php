<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
        DB::table('subjects')->insert([
            'name' => $this->faker->colorName,
            'created_at'=>$this->faker->dateTime,
            'updated_at'=>$this->faker->dateTime
        ]);
    }
}
