import React from "react";
import logo from "/storage/app/public/imgs/logo1.png";

function QuickLinks() {
    return (
        <section className="quick_links mt-12">
            <div className="container">
                <div className="box">
                    <div className="image">
                        <img src={logo} alt="logo_car_44" />
                    </div>
                    <div className="socials">
                        <a href="https://www.facebook.com/orcacoolers">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/orcacoolers/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@orcacoolers">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
                <div className="box">
                    <h4>
                        Company<i className="fa fa-chevron-down"></i>
                    </h4>
                    <ul className="list">
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h4>
                        Help &amp; support<i className="fa fa-chevron-down"></i>
                    </h4>
                    <ul className="list">
                        <li>
                            <a href="#">customer service</a>
                        </li>
                        <li>
                            <a href="#">Claim / return form</a>
                        </li>
                        <li>
                            <a href="#">Faq</a>
                        </li>
                        <li>
                            <a href="#">How-to-videos</a>
                        </li>
                        <li>
                            <a href="#">Id.me</a>
                        </li>
                        <li>
                            <a href="#">Return policy</a>
                        </li>
                        <li>
                            <a href="#">Warranty info</a>
                        </li>
                        <li>
                            <a href="#">Warranty registration</a>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h4>
                        Other<i className="fa fa-chevron-down"></i>
                    </h4>
                    <ul className="list">
                        <li>
                            <a href="#">Affiliate program</a>
                        </li>
                        <li>
                            <a href="#">Ambassador application</a>
                        </li>
                        <li>
                            <a href="#">customization</a>
                        </li>
                        <li>
                            <a href="#">Dealer application</a>
                        </li>
                        <li>
                            <a href="#">Donation &amp; sponsorship</a>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h4>
                        Site info<i className="fa fa-chevron-down"></i>
                    </h4>
                    <ul className="list">
                        <li>
                            <a href="#">Site map</a>
                        </li>
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default QuickLinks;
