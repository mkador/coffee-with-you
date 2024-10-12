import React from "react";
import { FaFacebook, FaMailBulk, FaMobileAlt, FaTwitter } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className=" mt-4 ">
      <Marquee>
        <p className="text-green-500 text-2xl font-mono">
          Best OFFER, 25% OFF !! Apply Code - <span className="text-red-700">BVXKHIUGIY</span>{" "}
        </p>
      </Marquee>
    </div>
  );
};

export default Header;
