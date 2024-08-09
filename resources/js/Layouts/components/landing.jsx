import React, { useRef, useState } from "react";
import landing from "/storage/app/public/imgs/landing.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, router } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';


function Landing() {
    const dateSt = useRef();
    const dateFl = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const start = dateSt.current.value;
        const end = dateFl.current.value;
        if (start && end) {
            const startDate = new Date(dateSt.current.value);
            const endDate = new Date(dateFl.current.value);
            if (startDate >= endDate) {
                alert("End date must be later than start date.");
            } else {
                console.log("Form submitted with valid dates:", start, end);
                const formData = {
                    start_date: start,
                    end_date: end,
                };
                
            try {
                const response = router.post(route("reservedCar"), formData );
                
                // Inertia.visit(route('success'));
            } catch (error) {
                console.error("Error:", error);
            }
            }
        } else {
            alert("choose a valid date range!");
        }
    };

    return (
        <>
            <section className="landing relative">
                <div className="bg_img absolute top-0 left-0 w-full h-full -z-10">
                    <img
                        src={landing}
                        alt="family_traveling"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-10 text-center">
                    <div className="title">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl my-8">
                            Discover your{" "}
                            <span style={{ color: "var(--primary-color)" }}>
                                perfect rental
                            </span>
                        </h1>
                        <p className="font-normal text-lg md:text-xl lg:text-2xl my-5">
                            Rent cars, houses, and items in just a few clicks
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="my-10 relative w-fit mx-auto"
                    >
                        <div className="input flex justify-center m_a:flex-col md:flex-row">
                            <input
                                ref={dateSt}
                                type="datetime-local"
                                placeholder="Search cars, accessories and more..."
                            />
                            <input
                                ref={dateFl}
                                type="datetime-local"
                                placeholder="Select location"
                            />
                        </div>
                        <span className="absolute left-full top-1/2 -translate-y-1/2 w-fit">
                            {/* <Link href="/hi/hi" method="post" data={formData} preserveState> */}
                                <button
                                    className="p-1 w-9 h-9 rounded-full bg-red-500"
                                    // type="submit"
                                    style={{
                                        fontFamily: "FontAwesome",
                                        cursor: "pointer",
                                        transition: "var(--transition)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            {/* </Link> */}
                        </span>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Landing;
