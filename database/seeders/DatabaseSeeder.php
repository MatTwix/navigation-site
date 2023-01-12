<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $this->call(AdminSeeder::class);

        for ($i = 0; $i < 10; $i++) {
            $this->call([
                SubjectSeeder::class,
                ImageSeeder::class,
                UserSeeder::class
            ]);
        }

        for ($i = 0; $i <= 10; $i++) {
            $this->call(TeacherSeeder::class);
        }

        for ($i = 0; $i < 10; $i++) {
            $this->call(ClassroomSeeder::class);
        }

        $this->call([
            ClassroomImageSeeder::class,
            ClassroomSubjectSeeder::class,
            TeacherSubjectSeeder::class
        ]);
    }
}
