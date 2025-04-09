import React from "react";
import banner3 from "./../../assets/banner3.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="relative">
        <img src={banner3} alt="Banner" className="w-full h-auto" />
        <div className="absolute left-6 top-16 bg-white w-2/5 p-10">
          <h3 className="uppercase text-[#7e7e84] text-sm font-normal pb-4">
            holiday gift guides
          </h3>
          <p className="text-3xl pb-10 font-normal">
            Last Chance to Save 20% Off.
          </p>
          {/* <p className="pb-6 font-light">Excludes Mood Lighting</p> */}
          <Link to="/shop">
            <button className="uppercase bg-black text-white text-sm rounded-md w-32 h-12 hover:opacity-75">
              shop gift
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
