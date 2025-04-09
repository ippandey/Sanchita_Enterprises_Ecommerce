import React from "react";
import Marquee from "react-fast-marquee";
import ticker_img from "./../../assets/ticker_img.webp";

const TextTicker = () => {
  const TextMessages = [
    {
      id: 1,
      msg: "Top-Quality Textile Chemicals",
    },
    {
      id: 2,
      msg: "Eco-Friendly Solutions for Textiles!",
    },
    {
      id: 3,
      msg: "Exclusive Deals on Dyeing Chemicals!",
    },
    {
      id: 4,
      msg: "Trusted by Industry Leaders",
    },
  ];
  return (
    <section className="h-20 bg-[#c08b75] flex items-center justify-center">
      <Marquee speed={100}>
        {TextMessages.map((item, index) => (
          <div key={index} className="flex items-center justify-center mr-32">
            <img src={ticker_img} alt="" className="text-center w-10 h-10" />
            <p
              key={item.id}
              className="text-center font-work text-lg text-white uppercase p-4 m-auto"
            >
              {item.msg}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TextTicker;
