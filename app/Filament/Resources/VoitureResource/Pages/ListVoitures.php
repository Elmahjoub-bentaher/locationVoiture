<?php

namespace App\Filament\Resources\VoitureResource\Pages;

use App\Filament\Resources\VoitureResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListVoitures extends ListRecords
{
    protected static string $resource = VoitureResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
