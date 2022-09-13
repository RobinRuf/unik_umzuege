import React from "react";

const Footer = () => {
  return (
    <div
      name="startseite"
      className="h-40 md:h-auto md:pb-10 w-full bg-gray-800"
    >
        <hr className="mx-10 sm:mx-20 md:mx-36 lg:mx-48 xl:mx-60 2xl:mx-72 3xl:mx-80"/>
      <div className="flex-1 text-center text-white font-semibold pt-10">
      Copyright © {new Date().getFullYear()} <a href="https://raigeki.dev" target='_blank'> Robin Ruf</a>
      </div>
    </div>
  );
};

export default Footer;
