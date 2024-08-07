import React from "react";

import honda from "/storage/app/public/imgs/2016_honda_cr_v.jpg";
import duster from "/storage/app/public/imgs/duster.jpg";
import hightLander from "/storage/app/public/imgs/2016_toyota_highlander.webp";
import octavia from "/storage/app/public/imgs/skoda_octavia.webp";
import mitsu from "/storage/app/public/imgs/2016-mitsubishi-outlander-sport-es-suv.avif";
import civic from "/storage/app/public/imgs/honda Civic.webp";
import { Link } from "@inertiajs/react";

function Features({ voitures }) {
    console.log(voitures);
    return (
        <section className="features pt-12">
            <div className="container">
                <h1 className="heading">Featured Listings</h1>
                <div className="cars grid grid-cols-1 gap-3 m_i:grid-cols-2 l_i:grid-cols-3">
                    <div className="box relative bg-white-color">
                        <div className="more absolute left-0 top-0 w-full h-full -z-10 opacity-0 px-4">
                            <div className="close cursor-pointer py-4">
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <p>
                                <span>brand</span>
                                <span>model</span>
                            </p>
                            <p>
                                <span>price</span>
                                <span>$30/day</span>
                            </p>
                            <p>
                                <span>transmission</span>
                                <span>manual</span>
                            </p>
                            <p>
                                <span>fuel</span>
                                <span>petrol</span>
                            </p>
                            <p>
                                <span>passenger</span>
                                <span>5</span>
                            </p>
                            <p>
                                <span>year</span>
                                <span>2005</span>
                            </p>
                            <p>
                                <span>mileage</span>
                                <span>12345 Km</span>
                            </p>
                            <p>
                                <span>ac</span>
                                <span>exists</span>
                            </p>
                            <p>
                                <span>gps</span>
                                <span>exists</span>
                            </p>
                            <p>
                                <span>bluetooth</span>
                                <span>exists</span>
                            </p>
                        </div>
                        <div className="img">
                            <img src={honda} alt="2016_honda_cr_v" />
                        </div>
                        <p className="title">
                            <span className="flex justify-start items-start flex-col">
                                <span className="brand">Honda</span>{" "}
                                <span className="model">CR-V</span>
                            </span>
                            <span>$30/day</span>
                        </p>
                        <div className="car_details grid grid-cols-3">
                            <div className="card">
                                <p>Transmission</p>
                                <p>Automatic</p>
                            </div>
                            <div className="card">
                                <p>Fuel</p>
                                <p>Petrol</p>
                            </div>
                            <div className="card">
                                <p>Passenger</p>
                                <p>4 persons</p>
                            </div>
                        </div>
                        <button className="show_more py-2">Show more</button>
                        <button>
                            <a href="">Book now</a>
                        </button>
                    </div>
                    {voitures && (
                        <>
                            {voitures?.map((voiture) => (
                                <div key={voiture.id} className="box">
                                    <div className="img">
                                        <img
                                            src={`storage/${voiture.voiture_image}`}
                                            alt="duster"
                                        />
                                    </div>
                                    <p className="title">
                                        <span>
                                            {voiture.marque} {voiture.modèle}
                                        </span>
                                        <span>
                                            {
                                                voiture.tarif_de_location_quotidien
                                            }{" "}
                                            MAD/day
                                        </span>
                                    </p>
                                    <div className="car_details grid grid-cols-3">
                                        <div className="card">
                                            <p>Transmission</p>
                                            <p>Automatic</p>
                                        </div>
                                        <div className="card">
                                            <p>Fuel</p>
                                            <p>Petrol</p>
                                        </div>
                                        <div className="card">
                                            <p>Passenger</p>
                                            <p>4 persons</p>
                                        </div>
                                    </div>
                                    <button>
                                        <Link
                                            href={route("reservation", voiture)}
                                        >
                                            Book now
                                        </Link>
                                    </button>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className="view_more">
                    <a href="">
                        <button>View all cars</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Features;
