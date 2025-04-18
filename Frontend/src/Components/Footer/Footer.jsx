import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="font-work text-[#202025] py-16 px-6 md:px-12 bg-white"
    >
      <div className="flex flex-col lg:flex-row flex-wrap gap-12 lg:gap-8 justify-between">
        {/* Contact Us */}
        <div className="w-full sm:w-[45%] lg:w-[20%]">
          <h3 className="font-semibold text-base mb-6">CONTACT US</h3>
          <p className="text-sm text-gray-700 mb-2">
            Email:{" "}
            <a
              href="mailto:clientcare@se.com"
              className="text-gray-600 hover:underline"
            >
              clientcare@se.com
            </a>
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Phone:{" "}
            <a href="tel:6354178148" className="text-gray-600 hover:underline">
              6354178148
            </a>
          </p>
          <p className="text-sm text-gray-700">
            Hours: Mon – Thu: 9AM – 7PM IST <br />
            Fri: 9AM – 5PM IST
          </p>
        </div>

        {/* Information */}
        <div className="w-full sm:w-[45%] lg:w-[15%]">
          <h3 className="font-semibold text-base mb-6">INFORMATION</h3>
          <ul className="space-y-2 text-sm">
            {[
              "My Account",
              "Order History",
              "Safety Guidelines",
              "Specials",
              "Press",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:underline text-gray-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div className="w-full sm:w-[45%] lg:w-[15%]">
          <h3 className="font-semibold text-base mb-6">CUSTOMER CARE</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Help Center",
              "Contact Us",
              "Returns & Refunds",
              "Site Map",
              "FAQs",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:underline text-gray-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div className="w-full sm:w-[45%] lg:w-[20%]">
          <h3 className="font-semibold text-base mb-6">COLLECTIONS</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Shop All",
              "Dyeing Agents",
              "Finishing Chemicals",
              "Printing Chemicals",
              "Auxiliary Chemicals",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:underline text-gray-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full lg:w-[30%]">
          <h3 className="font-medium text-2xl sm:text-[26px] font-cormorant mb-4">
            ENHANCE PERFORMANCE AND STAY INFORMED.
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Sign up for exclusive deals, product updates, expert tips, and more.
          </p>
          <form className="w-full">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border h-12 border-gray-300 rounded-md px-4 py-2 mb-3 text-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-2/5 h-12 bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700 text-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
