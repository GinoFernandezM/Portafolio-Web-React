import React from "react";
import HeroImage from "../assets/perfil3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "/resume.pdf"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#14141f]"
    >
      <div className=" w-5/6 m-auto flex flex-col justify-evenly items-center h-full px-2 md:flex-row">

        <div className="flex flex-col justify-center h-full mr-[0px] gap-20">
          
       
            <div>
              <h2 className="text-xl sm:text-3xl text-gray-500 py-4">
            Hola, soy
            </h2>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
            GINO FERNANDEZ
            </h2>
            <p className="text-xl sm:text-3xl text-gray-500 py-4">
            Desarrollador Front-end
            </p>
            </div>
     

          <div>
            <li
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#7121bd] cursor-pointer"
            >
              <a
                href={resume}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                Descargar CV
              </a>
              <span className=" duration-300 group-hover:translate-x-3">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </li>

          </div>
        </div>

        <div >
          <div className="relative z-0 ml-20 md:before:absolute
          md:before:-top-5 md:before:-left-10 md:before:rounded-t-[300px] md:before:w-full md:before:max-w-[450px] md:before:h-full md:before:border-2 md:before:z-[-1] md:before:border-[#9455cf]">
            <img
              src={HeroImage}
              alt="my profile"
              className="mx-auto w-2/3 md:w-full rounded-t-[300px] hover:filter saturate-100 hover:saturate-200 transition duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
