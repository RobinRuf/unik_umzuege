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
      href: "tel:0616918080",
      style: "flex text-white rounded-tl-md items-center",
    },
    {
      id: 2,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/41786019466",
      style: "flex text-white rounded-tr-md text-right items-center ",
    },
  ];

  return (
    <div className="flex-1 w-full bottom-0 fixed sm:hidden">
      <div className="flex items-center h-14 px-4 bg-gray-500 rounded-lg justify-between px-10">
        {links.map(({ id, child, href, style }) => (
          <div key={id}>
            <a
              href={href}
              className={style}
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
