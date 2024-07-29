import React from "react";

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <p>
            &copy; Copyright <span className="year">{currentYear}</span>.
            Designed and developed by{" "}
            <a
                className="text-primary-color font-bold"
                href="https://barmijbytes.com"
            >
                Barmijbytes
            </a>
            .
        </p>
    );
}

export default Footer;
