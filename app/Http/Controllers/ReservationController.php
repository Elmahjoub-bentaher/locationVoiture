<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Voiture;
use App\Models\User;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Spatie\Browsershot\Browsershot;
use TCPDF;

use App\Models\Reservation;


class ReservationController extends Controller
{
    public function success()
    {
        Log::info('success');
        // $availableVoitures = Session::get('availableVoitures', []);
        $availableVoitures = Cache::get('availableVoitures', []);

        if (!($availableVoitures instanceof \Illuminate\Support\Collection)) {
            $availableVoitures = collect($availableVoitures);
        }

        $voitureBrands = $availableVoitures->pluck('marque');
        $voitureModels = $availableVoitures->pluck('modèle');
        $voitureYear = $availableVoitures->pluck('année');
        
        return Inertia::render('reservedCar', [
            'voitures' => $availableVoitures,
            'voitureBrands' => $voitureBrands,
            'voitureModels' => $voitureModels,
            'voitureYear' => $voitureYear
        ]);
    }
    public function showReservation(Voiture $voiture){
            $voiture->voiture_image = asset('storage/' . $voiture->voiture_image);
        return Inertia::render('booking',[
            'selectedVoiture' => $voiture,
        ]);

    }
    public function createReservation(Request $request){
        $startDate = Cache::get('startDate', []);
        $endDate = Cache::get('endDate', []);

        $request->merge([
            'date_de_naissance' => Carbon::now(),
            'adresse' => 'agadir',
            'password' => Hash::make($request->numéro_de_permis_de_conduire)
        ]);

        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string',
            'numéro_de_téléphone' => 'required',
            'date_de_naissance' => 'date',
            'adresse' => 'string',
            'numéro_de_permis_de_conduire' => 'required|string',
            'password' => 'required'
        ]);
        $user = User::create($validatedData);
        $statut = "en cours";
        $reservation = Reservation::create([
            'user_id' => $user->id,
            'voiture_id' => $request->voiture_id,
            'date_de_réservation' => Carbon::now(),
            'date_de_début_de_réservation' => $startDate,
            'date_de_fin_de_réservation' => $endDate,
            'statut' => $statut,
        ]);
        
        $duree = $reservation->date_de_début_de_réservation->diffInDays($reservation->date_de_fin_de_réservation);

        $html = view('reservation.pdf', compact('user', 'reservation', 'duree'))->render();
            $imagePath = public_path('screenshot2.png');
            Browsershot::html($html)
                ->windowSize(900, 2284) // Set a larger viewport size
                ->deviceScaleFactor(2)  // Set a higher DPI (device scale factor)
                ->delay(2000)
                ->save($imagePath);



            $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);


            $pdf->SetMargins(0, 0, 0, 0);
            $pdf->SetAutoPageBreak(false);
            $pdf->AddPage('P', array(210, 297), false, false);

    
            // Load the image using GD
            $photo = imagecreatefrompng($imagePath);
    
            // Get the image dimensions
            $imageWidth = imagesx($photo);
            $imageHeight = imagesy($photo);
    
            // Check if the image is taller than the page
            if ($imageHeight > 2284) {
                // Create a new image instance for the top and bottom parts
                $top_part = imagecreatetruecolor($imageWidth, 2284);
                $bottom_part = imagecreatetruecolor($imageWidth, $imageHeight - 2284);
    
                // Copy the top and bottom parts of the photo
                imagecopyresampled($top_part, $photo, 0, 0, 0, 0, $imageWidth, 2284, $imageWidth, 2284);
                imagecopyresampled($bottom_part, $photo, 0, 0, 0, 2284, $imageWidth, $imageHeight - 2284, $imageWidth, $imageHeight - 2284);
    
                // Save the top and bottom parts as PNG files
                $top_part_path = tempnam(sys_get_temp_dir(), 'top_part');
                $bottom_part_path = tempnam(sys_get_temp_dir(), 'bottom_part');
    
                imagepng($top_part, $top_part_path);
                imagepng($bottom_part, $bottom_part_path);
    
                // Add the top part of the photo to the first page
                $pdf->Image($top_part_path, 0, 0, 210, 297);
    
                // Add a new page for the bottom part of the photo
                $pdf->AddPage('P', 'A4');
                $pdf->Image($bottom_part_path, 0, 0, 210, 297);
    
                // Free up memory and delete temporary files
                imagedestroy($top_part);
                imagedestroy($bottom_part);
                unlink($top_part_path);
                unlink($bottom_part_path);
            } else {
                // Image fits on one page
                $pdf->Image($imagePath, 0, 0, 210, 297);
            }
    
            // Output the PDF
            return response($pdf->Output('sample_with_image.pdf', 'S'))
                ->header('Content-Type', 'application/pdf');
        

    }
}
