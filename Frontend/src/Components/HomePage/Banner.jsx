// import React from "react";
// import banner3 from "./../../assets/banner3.webp";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <section>
//       <div className="relative">
//         <img src={banner3} alt="Banner" className="w-full h-auto" />
//         <div className="absolute left-6 top-16 bg-white w-2/5 p-10">
//           <h3 className="uppercase text-[#7e7e84] text-sm font-normal pb-4">
//             holiday gift guides
//           </h3>
//           <p className="text-3xl pb-10 font-normal">
//             Last Chance to Save 20% Off.
//           </p>
//           {/* <p className="pb-6 font-light">Excludes Mood Lighting</p> */}
//           <Link to="/shop">
//             <button className="uppercase bg-black text-white text-sm rounded-md w-32 h-12 hover:opacity-75">
//               shop gift
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import React from "react";
import banner3 from "./../../assets/banner3.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full">
      <img src={banner3} alt="Banner" className="w-full h-auto object-cover" />
      <div
        className="absolute top-10 left-4 sm:top-16 sm:left-10 md:top-20 md:left-16 lg:left-24
                   bg-white bg-opacity-90 p-5 sm:p-8 md:p-10 w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 shadow-md rounded-md"
      >
        <h3 className="uppercase text-[#7e7e84] text-xs sm:text-sm pb-2 sm:pb-4 font-medium">
          holiday gift guides
        </h3>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold pb-6 sm:pb-10">
          Last Chance to Save 20% Off.
        </p>
        {/* <p className="pb-4 text-sm font-light">Excludes Mood Lighting</p> */}
        <Link to="/shop">
          <button className="uppercase bg-black text-white text-xs sm:text-sm rounded-md px-5 py-3 hover:opacity-80 transition-opacity">
            shop gift
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
