<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;
use App\Models\Voiture;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'voiture_id',
        'date_de_réservation',
        'date_de_début_de_réservation',
        'date_de_fin_de_réservation',
        'statut',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function voiture(): BelongsTo
    {
        return $this->belongsTo(Voiture::class, 'voiture_id');
    }
}
