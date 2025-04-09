// import React from "react";

// const OurStory = () => {
//   return (
//     <section>
//       <div className="bg-[#849baa] h-[500px] flex items-center justify-start">
//         <div className="h-2/3 w-2/5 ml-14 p-8 ">
//           <h3 className="text-4xl font-semibold text-white mb-5">
//             Reliable Chemical Solutions
//           </h3>
//           <h3 className="text-4xl font-semibold text-white mb-10">
//             For Textiles
//           </h3>
//           <p className="text-white text-lg mb-10">
//             Enhancing fabric quality with advanced chemical formulations for
//             durability, color retention, and eco-friendly processing.
//           </p>
//           <button className="uppercase text-white border-[1px] border-white rounded-md w-36 h-12 hover:bg-white hover:text-black text-base">
//             Our Story
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurStory;

import React from "react";
import storypic1 from "./../../assets/storypic1.webp";
import storypic2 from "./../../assets/storypic2.webp";

const OurStory = () => {
  return (
    <section className="bg-[#8B9BA5] py-16 px-8 flex flex-col md:flex-row items-center justify-center">
      {/* Left Content */}
      <div className="md:w-1/2 text-white px-8">
        <h2 className="text-4xl md:text-5xl font-cormorant  mb-6">
          Reliable Chemical Solutions for Textiles
        </h2>
        <p className="text-lg mb-6 font-work">
          Enhancing fabric quality with advanced chemical formulations for
          durability, color retention, and eco-friendly processing.
        </p>
        <button className="border border-white px-6 py-3 text-white hover:bg-white hover:text-[#8B9BA5] transition-all font-work ">
          OUR STORY
        </button>
      </div>

      {/* Right Content (Images) */}
      <div className="md:w-1/2 flex gap-4 relative my-40 md:mt-0">
        <img
          src={storypic1}
          alt="Open Cream Container"
          className="w-1/2 object-cover shadow-lg "
        />
        <img
          src={storypic2}
          alt="Holding Cream Container"
          className="w-3/5 object-cover shadow-lg  absolute top-16 right-0"
        />
      </div>
    </section>
  );
};

export default OurStory;
