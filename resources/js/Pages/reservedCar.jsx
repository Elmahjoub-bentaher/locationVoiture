import Footer from "@/Layouts/components/footer";
import Header from "@/Layouts/components/header";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faGears, faUser } from "@fortawesome/free-solid-svg-icons";
import honda from "/storage/app/public/imgs/2016_honda_cr_v.jpg";

const ReservedCar = () => {
    return (
        <>
            <Header />
            <main>
                <section className="cars-section">
                    <div className="container">
                        <h1 className="text-3xl my-5 text-center">
                            Which vehicule do you want to drive?
                        </h1>
                        <div className="cars-filter flex gap-3 items-center flex-wrap overflow-hidden">
                            <h2 className="font-bold text-xl">filters:</h2>
                            <div className="filter-content flex gap-3 flex-wrap">
                                <div className="filter-box">
                                    <div className="dropdown dropdown-click">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn m-1 w-[100px] rounded-[30px] border-[#aaaaaa45]"
                                        >
                                            marque
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-52 p-2 shadow"
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
                                            model
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-52 p-2 shadow"
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
                                            year
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-52 p-2 shadow"
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
                                            Gearbox
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-52 p-2 shadow"
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
                                            className="dropdown-content menu bg-[#f4f4f9] rounded-box z-[1] top-14 border border-[#000] w-52 p-2 shadow"
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
                        <div className="cars-grid grid grid-cols-3 tablet:grid-cols-2 m_a:grid-cols-1 gap-7 my-10">
                            <div className="car-box outline outline-[3px] outline-primary-color rounded-[30px] p-3">
                                <div className="name text-center text-2xl mb-5">
                                    Model Marque
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
                                    <img src={honda} alt="" />
                                </div>
                                <div className="pricing">
                                    <span className="day-price font-bold text-2xl text-primary-color">
                                        <span className="currency">MAD</span>{" "}
                                        200/day
                                    </span>
                                    <span className="total-price block text-right">
                                        <span className="currency">MAD</span>{" "}
                                        1000 total
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="text-center py-4">
                <Footer />
            </footer>
        </>
    );
};

export default ReservedCar;
