<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReservationResource\Pages;
use App\Filament\Resources\ReservationResource\RelationManagers;
use App\Models\Reservation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BooleanColumn;

class ReservationResource extends Resource
{
    protected static ?string $model = Reservation::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('user_id')
                    ->relationship('user', 'id')
                    ->required(),

                Select::make('voiture_id')
                    ->relationship('voiture', 'id')
                    ->required(),

                DatePicker::make('date_de_réservation')
                    ->label('Date de réservation')
                    ->required(),

                DatePicker::make('date_de_début_de_réservation')
                    ->label('Date de début de réservation')
                    ->required(),

                DatePicker::make('date_de_fin_de_réservation')
                    ->label('Date de fin de réservation')
                    ->required(),

                Forms\Components\Select::make('statut')
                    ->required()
                    ->options([
                        'Confirmed' => 'Confirmed',
                        'Canceled' => 'Canceled',
                        'en cours' => 'en cours',
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->label('User')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('voiture.marque')
                    ->label('Voiture')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('date_de_réservation')
                    ->label('Date de Réservation')
                    ->date()
                    ->sortable()
                    ->searchable(),

                TextColumn::make('date_de_début_de_réservation')
                    ->label('Début de Réservation')
                    ->date()
                    ->sortable()
                    ->searchable(),

                TextColumn::make('date_de_fin_de_réservation')
                    ->label('Fin de Réservation')
                    ->date()
                    ->sortable()
                    ->searchable(),

                TextColumn::make('statut')->sortable()->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListReservations::route('/'),
            'create' => Pages\CreateReservation::route('/create'),
            'edit' => Pages\EditReservation::route('/{record}/edit'),
        ];
    }
}
