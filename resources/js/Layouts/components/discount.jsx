import React from "react";
import discount from "/storage/app/public/imgs/discount.jpg";

function Discount() {
    return (
        <section className="discount relative mt-12 flex items-center">
            <div className="img absolute z-0 top-0 left-0 w-full">
                <img
                    className="w-full h-full object-cover"
                    src={discount}
                    alt="discount_offer"
                />
            </div>
            <div className="container relative z-10">
                <div className="txt">
                    <p className="text-4xl font-bold leading-relaxed my-5 text-white">
                        40% Discount and <br /> Special Offers
                    </p>
                    <button>
                        <a href="">View Special Offers</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Discount;
