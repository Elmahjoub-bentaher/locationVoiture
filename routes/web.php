<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ReservationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/date/picker', function () {
    return Inertia::render('datePicker');
});

Route::get('/', [MainController::class, 'home'])->name('home');
// Route::get('/{voiture}', [MainController::class, 'homeReservation'])->name('reservation');
Route::post('/reservation/store', [MainController::class, 'store'])->name('reservation.store');

Route::get('/nari/pdf', [MainController::class, 'pdf'])->name('pdf');

Route::get('/hi/test', function () {
    return "Test route working!";
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/reservation/reserved-caaar', [MainController::class, 'reservedCar'])->name('reservedCar');
Route::get('/reservation/reserved-car', [ReservationController::class, 'success'])->name('success');
// Route::get('/date/picker', [MainController::class, 'datePicker'])->name('datePicker');
Route::get('/reservation/booking/{voiture}', [ReservationController::class, 'showReservation'])->name('booking');
Route::post('/reservation/store', [ReservationController::class, 'createReservation'])->name('book.store');

Route::get('/pdf/pdf', function () {
    return view('reservation.pdf');
})->name('pdf');

require __DIR__ . '/auth.php';
