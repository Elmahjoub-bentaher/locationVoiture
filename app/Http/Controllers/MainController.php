<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Voiture;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Spatie\Browsershot\Browsershot;
use TCPDF;

class MainController extends Controller
{
    public function home()
    {
        $voitures = Voiture::where('statut', '=', 'Available')->get();
        // dump($voitures);
        return Inertia::render('Welcome', [
            'voitures' => $voitures,
        ]);
    }
    public function homeReservation(Voiture $voiture)
    {
        $voitures = Voiture::where('statut', '=', 'Available')->get();
        // dump($voitures);
        return Inertia::render('reservation', [
            'voitures' => $voitures,
            'selectedVoiture' => $voiture,
        ]);
    }

    public function store(Request $request)
    {
        try {
            Log::info('Incoming reservation request data:', $request->all());
            $request->merge([
                'date_de_réservation' => \Carbon\Carbon::now(),
            ]);
            Log::info('Updated reservation request data:', $request->all());
            // Validate the request data
            $validatedData = $request->validate([
                'user_id' => 'required|exists:users,id',
                'voiture_id' => 'required|exists:voitures,id',
                'date_de_réservation' => 'required|date',
                'date_de_début_de_réservation' => 'required|date|after_or_equal:date_de_réservation',
                'date_de_fin_de_réservation' => 'required|date|after_or_equal:date_de_début_de_réservation',
                'statut' => 'required|in:Confirmed,Canceled',
            ]);
            Log::info('Validated reservation data:', $validatedData);
            // Create the reservation
            Reservation::create($validatedData);

            Log::info('Reservation created successfully.');

            $html = view('reservation.pdf')->render();
            $imagePath = public_path('screenshot2.png');
            Browsershot::html($html)
                ->windowSize(900, 2284) // Set a larger viewport size
                ->deviceScaleFactor(2)  // Set a higher DPI (device scale factor)
                ->delay(2000)
                ->save($imagePath);



            $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);


            // Set document information
            $pdf->SetCreator(PDF_CREATOR);
            $pdf->SetAuthor('BarmijBytes');
            $pdf->SetTitle('Sample PDF with Image');
            $pdf->SetSubject('PDF Generation');
            $pdf->SetKeywords('TCPDF, PDF, Laravel, Image');

            // Set margins and auto page breaks
            $pdf->SetMargins(0, 0, 0);
            $pdf->SetAutoPageBreak(false);

            // Add a page
            $pdf->AddPage('P', 'A4'); // A4 size page in portrait orientation

            // Add an image to the PDF
            if (file_exists($imagePath)) {
                $pdf->Image($imagePath, 0, 0, 210, 297, '', '', '', false, 300, '', false, false, 0);
            } else {
                Log::error('Image not found:', ['path' => $imagePath]);
            }

            // Redirect with a success message
            return response($pdf->Output('sample_with_image.pdf', 'I'))->header('Content-Type', 'application/pdf');
        } catch (\Exception $e) {
            // Log any exceptions
            Log::error('Error creating reservation:', [
                'exception' => $e->getMessage(),
                'request_data' => $request->all(),
            ]);

            // Redirect back with an error message
            return;
        }
    }

    public function reservedCar()
    {
        return Inertia::render('reservedCar');
    }
}
