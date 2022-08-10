import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <div className="py-6 px-6 bg-green-300 w-full">
        <Image
          src={Logo}
          alt=""
          width={60}
          height={60}
          className="bg-white rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
