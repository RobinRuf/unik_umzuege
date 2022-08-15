import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div>
          <img
            src={HeroImage}
            alt="Logo"
            className="rounded-2xl mx-auto w-2/3 md:w-full mt-20 md:mt-0 md:ml-4"
          />
        </div>
        <div className="flex flex-col justify-center h-full md:ml-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Unik Umzüge
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Deine Profis im Bereich Umzug, Transport, Entsorgung und Räumung!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
