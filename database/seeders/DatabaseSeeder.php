<?php

namespace Database\Seeders;

use App\Models\Voiture;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 't@example.com',
            'numéro_de_téléphone' => '00000000',
            'adresse' => 'agadir',
            'date_de_naissance' => Carbon::now(),
            'numéro_de_permis_de_conduire' => 'dsdjjjfjvjdfdf',
        ]);
        // Voiture::factory(6)->create();
    }
}
