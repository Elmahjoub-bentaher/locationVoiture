<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VoitureResource\Pages;
use App\Filament\Resources\VoitureResource\RelationManagers;
use App\Models\Voiture;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class VoitureResource extends Resource
{
    protected static ?string $model = Voiture::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\FileUpload::make('voiture_image')
                ->image(),

                Forms\Components\TextInput::make('marque')
                    ->required()
                    ->maxLength(50),

                Forms\Components\TextInput::make('modèle')
                    ->required()
                    ->maxLength(50),

                Forms\Components\TextInput::make('année')
                    ->required()
                    ->maxLength(4)
                    ->numeric(),

                Forms\Components\TextInput::make("numéro_d'immatriculation")
                    ->required()
                    ->maxLength(50)
                    ->unique(ignoreRecord: true),

                Forms\Components\TextInput::make('vin')
                    ->required()
                    ->maxLength(50)
                    ->unique(ignoreRecord: true),

                Forms\Components\TextInput::make('couleur')
                    ->required()
                    ->maxLength(20),

                Forms\Components\TextInput::make('kilométrage')
                    ->required()
                    ->numeric(),

                Forms\Components\Select::make('statut')
                    ->required()
                    ->options([
                        'Available' => 'Available',
                        'Rented' => 'Rented',
                        'Maintenance' => 'Maintenance',
                    ]),

                Forms\Components\TextInput::make('tarif_de_location_quotidien')
                    ->required()
                    ->numeric()
                    ->prefix('$')
                    ->minValue(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('marque')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('modèle')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('année')->sortable()->searchable(),
                Tables\Columns\TextColumn::make("numéro_d'immatriculation")->sortable()->searchable(),
                Tables\Columns\TextColumn::make('vin')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('couleur')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('kilométrage')->sortable(),
                Tables\Columns\TextColumn::make('statut')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('tarif_de_location_quotidien')->sortable(),
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
            'index' => Pages\ListVoitures::route('/'),
            'create' => Pages\CreateVoiture::route('/create'),
            'edit' => Pages\EditVoiture::route('/{record}/edit'),
        ];
    }
}
