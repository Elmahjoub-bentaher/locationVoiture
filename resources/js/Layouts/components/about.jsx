import React from "react";

import about from "/storage/app/public/imgs/about_us.jpeg";

function About() {
    return (
        <section className="about pt-12">
            <div className="container">
                <h1 className="heading">About us</h1>
                <div className="content flex justify-between items-center l_a:flex-col l_a:text-center gap-7">
                    <div className="txt">
                        <h2>
                            Rental service with wide range of{" "}
                            <span>vehicules</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga ratione quo ea officia molestiae culpa,
                            rem pariatur et consequuntur impedit doloribus
                            provident tenetur iure aperiam doloremque unde hic
                            perspiciatis eveniet odit sapiente dolorem nobis ex
                            debitis ipsa? Dignissimos a necessitatibus incidunt
                            accusamus magnam non. Accusantium error commodi
                            voluptate totam nihil.
                        </p>
                        <div className="count flex justify-start l_a:justify-center items-center gap-8 my-7 text-center">
                            <div>
                                <span>34+</span>
                                <span>Vehicules</span>
                            </div>
                            <div>
                                <span>1000+</span>
                                <span>Customers</span>
                            </div>
                            <div>
                                <span>100+</span>
                                <span>Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={about} alt="about_us" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
