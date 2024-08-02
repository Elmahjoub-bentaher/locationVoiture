import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import Welcome from "./Welcome";

function Reservation() {
    const [startD, setStartD] = useState("");
    const [endD, setEndD] = useState("");
    const [statut, setStatut] = useState("Confirmed");
    const user = usePage().props.auth.user;

    const voitures = usePage().props.voitures;
    const voiture = usePage().props.selectedVoiture;
    console.log('vo', voiture);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            user_id: user.id,
            voiture_id: voiture.id,
            date_de_début_de_réservation: startD,
            date_de_fin_de_réservation: endD,
            statut: statut,
        };

        try {
            const response = await axios.post(route("reservation.store"), formData, {
                responseType: 'blob', // Important for binary data
            });

            // Create a link element and use it to trigger the download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'reservation.pdf'); // Specify the file name
            document.body.appendChild(link);
            link.click();

            // Clean up
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error("Error:", error);
            // Optionally, show an error message to the user
        }
    };

    return (
        <>
            <Welcome
                Children={
                    <div>
                        <form className="bg-white p-6 rounded shadow-md" onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="client_id" className="block text-sm font-medium text-gray-700">Client</label>
                                <input type="text" name="client_id" id="client_id" value={user.name}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    readOnly
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="car_id" className="block text-sm font-medium text-gray-700">Car</label>
                                <input type="text" name="car_id" id="car_id" value={`${voiture.marque} ${voiture.modèle}`}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    readOnly
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="reservation_start_date" className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input type="date" name="reservation_start_date" id="reservation_start_date" value={startD}
                                    onChange={(e) =>
                                        setStartD(e.target.value)
                                    } className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="reservation_end_date" className="block text-sm font-medium text-gray-700">End Date</label>
                                <input type="date" name="reservation_end_date" id="reservation_end_date" value={endD}
                                    onChange={(e) =>
                                        setEndD(e.target.value)
                                    }
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                <select name="status" id="status" value={statut}
                                    onChange={(e) =>
                                        setStatut(e.target.value)
                                    }
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                    <option value="Confirmed">Confirmed</option>
                                    <option value="Canceled">Canceled</option>
                                </select>
                            </div>

                            <div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Create Reservation</button>
                            </div>
                        </form>
                    </div>
                }
            ></Welcome>
        </>
    );
}

export default Reservation;
