<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('voitures', function (Blueprint $table) {
            $table->id();
            $table->string('voiture_image')->nullable();
            $table->string('marque');
            $table->string('modèle');
            $table->string('année');
            $table->string("numéro_d'immatriculation")->unique();
            $table->string('vin')->unique();
            $table->string('couleur');
            $table->string('kilométrage');
            $table->string('statut');
            $table->string('tarif_de_location_quotidien');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voitures');
    }
};
