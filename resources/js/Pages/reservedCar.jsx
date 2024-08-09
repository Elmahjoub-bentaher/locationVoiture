
import React, { useState, useEffect } from "react";

import { Link, usePage } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faGears, faUser } from "@fortawesome/free-solid-svg-icons";

import honda from "/storage/app/public/imgs/2016_honda_cr_v.jpg";
import Welcome from "./Welcome";

const ReservedCar = () => {
    const [selected, setSelected] = useState(null);
    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);
    const [localVoitures, setLocalVoitures] = useState([]);
    const voitures = usePage().props.voitures;
    const voitureBrands = usePage().props.voitureBrands;
    const voitureModels = usePage().props.voitureModels;
    const voitureYear = usePage().props.voitureYear;
    const handleSelect = (event) => {
        setSelected(event.target.value);
    };
    const handleSelect1 = (event) => {
        setSelected1(event.target.value);
    };
    const handleSelect2 = (event) => {
        setSelected2(event.target.value);
    };

    useEffect(() => {

        const filteredVoitures = voitures.filter(voiture => {
            // Exclude voitures by brand
            
                const excludeByBrand = selected === 'All' || voiture.marque == selected;
            
            
                const excludeByModel = selected1 === 'All' || voiture.modèle == selected1;


                const excludeByYear = selected2 === 'All' || voiture.année == selected2;
            

            return excludeByBrand && excludeByModel && excludeByYear;
        });

        // Update local voitures
        setLocalVoitures(filteredVoitures);
    }, [selected, selected1, selected2]);

    return (
        <>
            <Welcome
                Children={
            <main>
                <section className="cars-section">
                    <div className="container">
                        <h1 className="text-3xl my-5 text-center">
                            Which vehicule do you want to drive?
                        </h1>
                        <div className="cars-filter flex gap-3 items-center flex-wrap">
                            <h2 className="font-bold text-xl">filters:</h2>
                            <div className="filter-content flex gap-3 flex-wrap">
                                <div className="filter-box">
                                    <div className="dropdown dropdown-click">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn m-1 w-[100px] rounded-[30px] border-[#aaaaaa45]"
                                        >
                                            {!selected ? "filter" : selected}
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-fit p-2 shadow"
                                        >
                                            <li>
                                                <button
                                                    onClick={handleSelect}
                                                    value="All"
                                                >
                                                    All
                                                </button>
                                            </li>
                                            {voitureBrands.map((voitureBrand, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={handleSelect}
                                                    value={voitureBrand}
                                                >
                                                   {voitureBrand} 
                                                </button>
                                            </li>
                                            ))}
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-box">
                                    <div className="dropdown dropdown-click">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn m-1 w-[100px] rounded-[30px] border-[#aaaaaa45]"
                                        >
                                           {!selected1 ? "model" : selected1}
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-fit p-2 shadow"
                                        >
                                            <li>
                                                <button
                                                    onClick={handleSelect1}
                                                    value="All"
                                                >
                                                    All
                                                </button>
                                            </li>
                                            {voitureModels.map((voitureModel, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={handleSelect1}
                                                    value={voitureModel}
                                                >
                                                   {voitureModel} 
                                                </button>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-box">
                                    <div className="dropdown dropdown-click">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn m-1 w-[100px] rounded-[30px] border-[#aaaaaa45]"
                                        >
                                            {!selected2 ? "Year" : selected2}
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-fit p-2 shadow"
                                        >
                                            <li>
                                                <button
                                                        onClick={handleSelect2}
                                                        value="All"
                                                    >
                                                        All
                                                </button>
                                            </li>
                                            {voitureYear.map((voitureY, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={handleSelect2}
                                                    value={voitureY}
                                                >
                                                   {voitureY} 
                                                </button>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-box">
                                    <div className="dropdown dropdown-click">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn m-1 w-[100px] rounded-[30px] border-[#aaaaaa45]"
                                        >
                                            Gearbox
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-fit p-2 shadow"
                                        >
                                            <li>
                                                <a>Item 1</a>
                                            </li>
                                            <li>
                                                <a>Item 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-box">
                                    <div className="dropdown dropdown-click">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn m-1 w-[100px] rounded-[30px] border-[#aaaaaa45]"
                                        >
                                            Fuel
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-fit p-2 shadow"
                                        >
                                            <li>
                                                <a>Item 1</a>
                                            </li>
                                            <li>
                                                <a>Item 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {voitures && (
                        <>
                        {localVoitures?.map((voiture, index) => (
                        <div key={index} className="cars-grid grid grid-cols-3 tablet:grid-cols-2 m_a:grid-cols-1 gap-7 my-10">
                            <div className="car-box outline outline-[3px] outline-primary-color rounded-[30px] p-3">
                                <div className="name text-center text-2xl mb-5">
                                    {voiture.marque} {voiture.modèle}
                                </div>
                                <div className="icons-characteristic flex flex-wrap gap-2">
                                    <div className="year px-3 py-1 rounded-xl bg-[#f4f4f9]">
                                        Year
                                    </div>
                                    <div className="passenger flex gap-2 items-center px-3 py-1 rounded-xl bg-[#f4f4f9]">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="nbr">5</span>
                                    </div>
                                    <div className="gear px-3 flex gap-2 items-center py-1 rounded-xl bg-[#f4f4f9]">
                                        <FontAwesomeIcon icon={faGears} />
                                        <span className="nbr">Manual</span>
                                    </div>
                                    <div className="fuel px-3 flex gap-2 items-center py-1 rounded-xl bg-[#f4f4f9]">
                                        <FontAwesomeIcon icon={faGasPump} />
                                        <span className="nbr">Gasoline</span>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src={`${voiture.voiture_image}`} alt="" />
                                </div>
                                <div className="pricing">
                                    <span className="day-price font-bold text-2xl text-primary-color">
                                        <span className="currency">MAD</span>{" "}
                                            {voiture.tarif_de_location_quotidien}/day
                                    </span>
                                    <span className="total-price block text-right">
                                        <span className="currency">MAD</span>{" "}
                                        1000 total
                                    </span>
                                </div>
                                <Link href={route("booking", voiture)}>
                                    <button className="booking bg-primary-color w-full p-3 rounded-md mt-6 mb-4">
                                        Book now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        ))}
                        </>
                        )}
                    </div>
                </section>
            </main>
                }>
            </Welcome>
        </>
    );
};

export default ReservedCar;
