
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pdf</title>
    <style>
        * {
            box-sizing: border-box;
        }
        .container {
            padding: 0 15px;
            margin: 0 auto;
        }

        @media (max-width: 576px) {
            .container {
                width: 100%;
            }
        }

        @media (min-width: 576px) {
            .container {
                width: 540px;
            }
        }

        @media (min-width: 768px) {
            .container {
                width: 720px;
            }
        }

        @media (min-width: 992px) {
            .container {
                width: 960px;
            }
        }

        @media (min-width: 1200px) {
            .container {
                width: 1140px;
            }
        }

        @media (min-width: 1400px) {
            .container {
                width: 1320px;
            }
        }
        header,
        .nbr_cmd {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 700
        }
        h2 {
            font-size: 25px
        }
        .nbr_cmd p {
            font-size: 35px;
            color: #aaa;
        }
        .info .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            border: 5px solid #e93740;
            border-radius: 16px;
            padding: 20px;
        }
        .info p {
            font-size: 25px
        }
        .contact p {
            font-size: 30px;
            line-height: 1.8;
        }
        @media (max-width: 768px) {
            .nbr_cmd p {
                font-size: 30px
            }

            .info .content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .contact p {
                font-size: 22px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            @if(isset($reservation))
                <div class="date-time">{{ $reservation?->date_de_réservation }}</div>
            @else
                <div class="date-time">No reservation available</div>
            @endif
            <div class="date-time">Checkout - Location voiture</div>
        </header>
        <main>
            <div class="nbr_cmd">
                <p class="txt">Numero  de commande:</p>
                @if (isset($reservation))
                    <p class="txt">{{$reservation?->id}}</p>
                @else
                    <p class="txt">99</p>
                @endif

            </div>
            <div class="info">
                <h2>Info</h2>
                <div class="content">
                    <div class="nom">
                        <h2>Nom Prenom:</h2>
                        @if (isset($user))
                            <p>{{$user?->name}}</p>
                        @else
                            <p>maroine al3arabi</p>
                        @endif

                    </div>
                    <div class="tel">
                        <h2>telephone:</h2>
                        @if (isset($user))
                            <p>{{$user?->numéro_de_téléphone}}</p>
                        @else
                            <p>0633456456432</p>
                        @endif

                    </div>
                    <div class="vehicule">
                        <h2>vehicule:</h2>
                        <p>Dacia Logan</p>
                    </div>
                    <div class="duree">
                        <h2>duree:</h2>
                        @if (isset($user))
                            <p>{{ $duree ? $duree: "n" }} jours</p>
                        @else
                            <p>22 jours</p>
                        @endif
                    </div>
                    <div class="total">
                        <h2>paiement total:</h2>
                        <p>600 MAD</p>
                    </div>
                </div>
            </div>
            <div class="contact">
                <h2>Contact</h2>
                <p>nous sommes disponibles pour répondre a vous questions et vous assiter au +21256485985698/Whatsapp ou par e-mail contact@barmij-car.ma</p>
            </div>
        </main>
    </div>
</body>
</html>
