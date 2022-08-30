import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MobileSocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Anrufen <FaPhone size={30} />
        </>
      ),
      href: "https://www.facebook.com/unikumzuege",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://www.facebook.com/unikumzuege",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="flex bottom-0 fixed md:hidden">
      <div>
        {links.map(({ id, child, href, style }) => (
          <div
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSocialLinks;
