import React from "react";
import Footer from "@/Layouts/components/footer";
import Header from "@/Layouts/components/header";
import honda from "/storage/app/public/imgs/2016_honda_cr_v.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faGears, faUser } from "@fortawesome/free-solid-svg-icons";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <h1 className="text-3xl my-5 mb-20 text-center">
                            Vehicule Booking
                        </h1>
                        <div className="content flex justify-between items-start gap-7 m_a:flex-col">
                            <div className="w-[47%] m_a:w-full car-box outline outline-[3px] outline-primary-color rounded-[30px] p-3">
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
                            <form action="" className="w-[47%] m_a:w-full">
                                <div className="input-label mb-5">
                                    <label
                                        className="block text-xl mb-5"
                                        htmlFor="name"
                                    >
                                        Nom Prenom
                                    </label>
                                    <input
                                        className="w-full rounded-xl"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="example:hicham marzouqui"
                                    />
                                </div>
                                <div className="input-label mb-5">
                                    <label
                                        className="block text-xl mb-5"
                                        htmlFor="phone"
                                    >
                                        N<sup>o</sup> Telephone
                                    </label>
                                    <input
                                        className="w-full rounded-xl"
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="example:0623466856"
                                    />
                                </div>
                                <div className="input-label mb-5">
                                    <label
                                        className="block text-xl mb-5"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full rounded-xl"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example:hichammarzouui@gmail.com"
                                    />
                                </div>
                                <div className="input-label mb-5">
                                    <label
                                        className="block text-xl mb-5"
                                        htmlFor="cin"
                                    >
                                        CIN
                                    </label>
                                    <input
                                        className="w-full rounded-xl"
                                        type="text"
                                        name="cin"
                                        id="cin"
                                        placeholder="example:JD653845"
                                    />
                                </div>
                                <div className="input-label mt-10">
                                    <input
                                        className="block w-full bg-primary-color py-2 text-xl font-bold text-white cursor-pointer rounded-2xl"
                                        type="submit"
                                        name="submit"
                                        value="book"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <footer className="text-center py-4 bg-[#ddd] mt-5">
                    <Footer />
                </footer>
            </main>
        </>
    );
}
