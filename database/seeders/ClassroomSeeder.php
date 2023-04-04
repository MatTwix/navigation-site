<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassroomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Faker::create();
        DB::table('classrooms')->insert([
            'name' => $this->faker->colorName,
            'number' => $this->faker->numberBetween(100, 400),
            'way_to' => $this->faker->locale,
            'owner_id' => rand(1, 10),
            'destination' => rand(0, 1),
            'created_at'=>$this->faker->dateTime,
            'updated_at'=>$this->faker->dateTime
        ]);
    }
}
