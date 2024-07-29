import {
    faDollarSign,
    faEllipsis,
    faLeaf,
    faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Categories() {
    return (
        <section className="categories pt-12">
            <div className="container">
                <div className="head">
                    <span></span>
                    <h1 className="heading">Browse from top categories</h1>
                    <span></span>
                </div>
                <div className="w-64 s_i:w-4/5 m_i:w-full l_i:w-full m-auto slide grid gap-5 s_i:grid-cols-2 m_i:grid-cols-3 l_i:grid-cols-4">
                    <div className="child duration-500 hover:scale-105">
                        <a href="">
                            <span>
                                <FontAwesomeIcon icon={faLeaf} />
                            </span>
                            <span>Economic cars</span>
                        </a>
                    </div>
                    <div className="child duration-1000 hover:scale-105">
                        <a href="">
                            <span>
                                <FontAwesomeIcon icon={faDollarSign} />
                            </span>
                            <span>luxe cars</span>
                        </a>
                    </div>
                    <div className="child duration-500 hover:scale-105">
                        <a href="">
                            <span>
                                <FontAwesomeIcon icon={faVanShuttle} />
                            </span>
                            <span>panel vans</span>
                        </a>
                    </div>
                    <div className="child duration-500 hover:scale-105">
                        <a href="">
                            <span>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                            <span>More</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
