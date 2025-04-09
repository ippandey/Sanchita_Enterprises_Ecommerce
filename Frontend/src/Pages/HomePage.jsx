import React, { useRef } from "react";
import ImageSlider from "../Components/HomePage/ImageSlider";
import TextTicker from "../Components/HomePage/TextTicker";
import NewArrivals from "../Components/HomePage/NewArrivals";
import ShopByCategories from "../Components/HomePage/ShopByCategories";
import AboutParas from "../Components/HomePage/AboutParas";
import Banner from "../Components/HomePage/Banner";
import BestSeller from "../Components/HomePage/BestSeller";
import BigBanners from "../Components/HomePage/BigBanners";
import Essentials from "../Components/HomePage/Essentials";
import OurStory from "../Components/HomePage/OurStory";
import Blogs from "../Components/HomePage/Blogs";
import Testimonials from "../Components/HomePage/Testimonials";
import FAQ from "../Components/HomePage/FAQ";

const HomePage = () => {
  return (
    <div>
      {/* Image Slider Section*/}
      <ImageSlider />

      {/* Text Ticker/Marquee Section*/}
      <TextTicker />

      {/* New Arrival Section */}
      <NewArrivals />

      {/* Shop By Categories Section */}
      <ShopByCategories />

      {/* About Paragraph Section */}
      <AboutParas />

      {/* Banner Section */}
      <Banner />

      {/* Best Seller Section */}
      <BestSeller />

      {/* Big Banner Section */}
      <BigBanners />

      {/* Essentials Section */}
      <Essentials />

      {/* Our Story Section */}
      <OurStory />

      {/* Blogs Section */}
      <Blogs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default HomePage;
