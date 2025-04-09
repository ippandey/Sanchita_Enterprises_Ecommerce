import React from "react";

const Footer = () => {
  return (
    <footer className="font-work text-[#202025] py-20 px-8">
      <div className="flex gap-8">
        {/* Contact Us */}
        <div className="w-1/4">
          <h3 className="font-semibold text-base mb-8">CONTACT US</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:sanchitaupadhyay1973@gmail.com"
              className="text-gray-600"
            >
              clientcare@se.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:6354178148" className="text-gray-600">
              6354178148
            </a>
          </p>
          <p>
            Hours: Monday – Thursday: 9AM – 7PM IST, <br />
            Friday: 9AM – 5PM IST
          </p>
        </div>

        {/* Information */}
        <div className="w-1/5">
          <h3 className="font-semibold text-base mb-8">INFORMATION</h3>
          <ul className="space-y-3 font-normal text-[#202025]">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Order History
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safety Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Specials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Custom Care */}
        <div className="w-1/5">
          <h3 className="font-semibold text-base mb-8">CUSTOM CARE</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div className="w-1/4">
          <h3 className="font-semibold text-base mb-8">COLLECTIONS</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline">
                Shop All
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dyeing Agents
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Finishing Chemicals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Printing Chemicals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Auxiliary Chemicals
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-medium text-[28px] font-cormorant mb-6">
            ENHANCE PERFORMANCE AND STAY INFORMED.
          </h3>
          <p className="text-gray-600 mb-4">
            Sign up for exclusive deals, product updates, expert tips, and more.
          </p>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border h-12 border-gray-300 rounded-md px-4 py-2 mb-3"
            />
            <button
              type="submit"
              className="w-2/5 h-12 bg-gray-800 text-white rounded-md py-2 hover:bg-gray-700"
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
