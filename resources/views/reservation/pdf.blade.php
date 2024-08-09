
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{-- <link rel="stylesheet" href={{{{ mix('file') }}}}> --}}
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <title>Document</title>
    <style>
        /* .flex {
            display: flex;
        }
        .justify-between {
            justify-content: space-between;
        }
        .items-center {
            align-items: center;
        }
        .grid {
            display: grid;
        }
        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .container {
            padding-left: 15px;
            padding-right: 15px;
            margin-left: auto;
            margin-right: auto;
        } */
    </style>
</head>
<body>
    <div class="container">
        <header class="flex justify-between items-center">
            <div class="date-time">{{ $reservation->date_de_réservation }}</div>
            <div class="date-time">Checkout - Location voiture</div>
        </header>
        <main>
            <div class="nbr_cmd flex justify-between items-center">
                <p class="txt">Numero  de commande:</p>
                <p class="txt">{{$reservation->id}}</p>
            </div>
            <div class="info">
                <h2>Info</h2>
                <div class="content grid grid-cols-2 border border-primary-color">
                    <div class="nom">
                        <h2>Nom Prenom:</h2>
                        <p>{{$user->name}}</p>
                    </div>
                    <div class="tel">
                        <h2>telephone:</h2>
                        <p>{{$user->numéro_de_téléphone}}</p>
                    </div>
                    <div class="vehicule">
                        <h2>vehicule:</h2>
                        <p>Dacia Logan</p>
                    </div>
                    <div class="duree">
                        <h2>duree:</h2>
                        <p>{{ $duree }}jours</p>
                    </div>
                    <div class="total">
                        <h2>paiement total:</h2>
                        <p>600 MAD</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
