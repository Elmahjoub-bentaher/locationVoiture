import {
    faFacebook,
    faInstagram,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact() {
    return (
        <section className="contact pt-12" id="contact">
            <div className="container">
                <h2 className="heading">Contact us</h2>
                <div className="contain">
                    <div className="socials">
                        <a href="" target="_blank">
                            {/* <i className="fa-brands fa-facebook"></i> */}
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="" target="_blank">
                            {/* <i className="fa-brands fa-instagram"></i> */}
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="" target="_blank">
                            {/* <i className="fa-brands fa-tiktok"></i> */}
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </div>
                    <h3>FELL FREE TO CONTACT US</h3>
                    <div className="content flex justify-between items-center l_a:flex-col">
                        <form action="" method="POST" className="contact_form">
                            <input
                                type="hidden"
                                name="access_key"
                                value="00ebf384-08a6-4af0-b7cf-d8243ff875f2"
                            />
                            <input
                                type="email"
                                className="email"
                                name="email"
                                placeholder="Your Email"
                            />
                            <input
                                type="text"
                                className="subject"
                                name="subject"
                                placeholder="Subject"
                            />
                            <textarea
                                name="comment"
                                className="comment"
                                placeholder="Your Comment"
                            ></textarea>
                            <button type="submit" name="submit">
                                Post your comment
                            </button>
                        </form>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3024.9786626339323!2d-9.218919532129469!3d30.392317298457318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1714315495010!5m2!1sen!2sma"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
