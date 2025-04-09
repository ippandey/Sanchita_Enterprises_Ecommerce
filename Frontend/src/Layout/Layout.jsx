import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routers />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
