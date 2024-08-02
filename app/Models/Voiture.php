<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Reservation;

class Voiture extends Model
{
    use HasFactory;

    protected $fillable = [
        'voiture_image',
        'marque',
        'modèle',
        'année',
        "numéro_d'immatriculation",
        'vin',
        'couleur',
        'kilométrage',
        'statut',
        'tarif_de_location_quotidien',
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
