<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Voiture>
 */
class VoitureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'marque' => $this->faker->randomElement(['Toyota', 'Ford', 'Honda', 'Chevrolet', 'Nissan']),
            'modèle' => $this->faker->word,
            'année' => $this->faker->year($max = 'now'),
            "numéro_d'immatriculation" => strtoupper($this->faker->bothify('??###??')),
            'vin' => strtoupper($this->faker->bothify('??######??######')),
            'couleur' => $this->faker->safeColorName,
            'kilométrage' => $this->faker->numberBetween(5000, 200000),
            // 'statut' => $this->faker->randomElement(['Available', 'Rented', 'Maintenance']),
            'statut' => 'Available',
            'tarif_de_location_quotidien' => $this->faker->randomFloat(2, 50, 500),
        ];
    }
}
