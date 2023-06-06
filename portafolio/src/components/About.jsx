import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-[#14141f] "
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full ">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre Mi
          </p>
        </div>

        <div className=" w-full">
          <p className="text-xl mt-12 flex w-9/12 mx-auto items-center flex-col">
          Soy un desarrollador Front-end junior con experiencia en tecnologías como HTML, CSS, JavaScript, ReactJS y Tailwind. He trabajado en varios proyectos personales, donde he aplicado mis conocimientos en estas tecnologías para crear sitios web y aplicaciones web. Cuento con un portafolio donde se pueden ver mis trabajos más recientes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
