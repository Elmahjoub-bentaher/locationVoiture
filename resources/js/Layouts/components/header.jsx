import React, { useState } from "react";
import logo from "/storage/app/public/imgs/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [navShow, setNavShow] = useState(false);

    return (
        <>
            <header className="text-lg">
                <nav className="container flex justify-between items-center py-4">
                    <div className="logo">
                        <a href="">
                            <img src={logo} alt="logo_car_44" />
                        </a>
                    </div>
                    <ul
                        className={`links ${
                            navShow ? "show" : ""
                        } fixed flex justify-between items-center l_i:relative`}
                    >
                        <li>
                            <a href="" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="">Cars</a>
                        </li>
                        <li>
                            <a href="">Categories</a>
                        </li>
                        <li>
                            <a href="">About us</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a
                                href="../user_area/sign_up.php"
                                className="l_i:hidden"
                            >
                                sign up
                            </a>
                        </li>
                        <li>
                            <a
                                href="../user_area/sign_in.php"
                                className="l_i:hidden"
                            >
                                sign in
                            </a>
                        </li>
                        <span className="absolute top-5 right-5 text-xl cursor-pointer l_i:hidden">
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </ul>
                    <div className="icons flex justify-between items-center">
                        <div className="flex">
                            <a
                                href="./templates/user_area/sign_up.php"
                                className="text-primary-color border border-primary-color border-solid py-2 px-3 flex justify-center items-center mx-1 l_a:hidden l:text-white l:p-3 l:px-4 l:bg-primary-color rounded-full"
                            >
                                <i className="l:mr-2 fa-solid fa-user-plus"></i>
                                <span>Sign up</span>
                            </a>
                            <a
                                href="./templates/user_area/sign_in.php"
                                className="text-black-color border border-black-color border-solid py-2 px-3 flex justify-center items-center mx-1 l_a:hidden l:text-white l:p-3 l:px-4 l:bg-black-color rounded-full"
                            >
                                <i className="l:mr-2 fa-solid fa-person-walking-dashed-line-arrow-right"></i>
                                <span>Sign in</span>
                            </a>
                        </div>
                        <button
                            onClick={() => {
                                setNavShow(!navShow);
                            }}
                            className="inline-block ml-5 l_i:hidden"
                        >
                            <FontAwesomeIcon icon={!navShow ? faBars : faX} />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
