import pageKFC from "../assets/portfolio/pageKFC.png"
import pageMusic from "../assets/portfolio/pageMusic.png"
import carsPages from "../assets/portfolio/captura-cars-page.png"
import gameSnake from "../assets/portfolio/gameSnake.png"
import pageEcom from "../assets/portfolio/page-ecomerce.png"
import pagetraker from "../assets/portfolio/pagetraker.png"
import pageMovie from "../assets/portfolio/pageMovie.png"
import gameTicTacToe from "../assets/portfolio/gameTicTacToe.png"
import {FaLink, FaGithub} from "react-icons/fa"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: carsPages,
      demo: 'https://cars-page-gino.vercel.app/',
      git: "https://github.com/GinoFernandezM/Cars-Page",
      skill: "Tailwind| NextJS| Typescript",
    },
    {
      id: 2,
      src: pagetraker,
      demo: 'https://page-traker-gino.netlify.app/',
      git: "https://github.com/GinoFernandezM/Portafolio-Web-React/tree/main/subscription-tracker-react",
      skill: "HTML | CSS | JS | ReactJS",
    },
    {
      id: 3,
      src: pageKFC,
      demo: 'https://page-kfc-gino.netlify.app/',
      git: "https://github.com/GinoFernandezM/Portafolio/tree/main/Pagina-Web-KFC",
      skill: "HTML | CSS | JS",
    },
    {
      id: 4,
      src: pageEcom,
      demo: 'https://e-commerce-shopy.netlify.app/',
      git: "https://github.com/GinoFernandezM/Portafolio-Web-React/tree/main/store-online",
      skill: "HTML | CSS | JS | ReactJS| Tailwind",
    },
    {
      id: 5,
      src: pageMusic,
      demo: 'https://page-music-gino.netlify.app/',
      git: "https://github.com/GinoFernandezM/Portafolio/tree/main/Music-Player",
      skill: "HTML | CSS | JS",
    },
    {
      id: 6,
      src: gameSnake,
      demo: 'https://game-snake-gino.netlify.app/',
      git: "https://github.com/GinoFernandezM/Portafolio/tree/main/Snake",
      skill: "HTML | CSS | JS",
    },
    {
      id: 7,
      src: pageMovie,
      demo: 'https://page-movie-gino.netlify.app/',
      git: "https://github.com/GinoFernandezM/Portafolio-Web-React/tree/main/search-movie-react",
      skill: "HTML | CSS | JS | ReactJS",
    },
    {
      id: 8,
      src: gameTicTacToe,
      demo: 'https://game-tic-tac-toe-gino.netlify.app/',
      git: "https://github.com/GinoFernandezM/Portafolio-Web-React/tree/main/tic-tac-toe",
      skill: "HTML | CSS | JS | ReactJS",
    },
  ];

  // #14141f , #232123, rgb(18,17,18),  #1f1e19, #030122

  return (
    <div
      name="portfolio"
      className="bg-[#14141f] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portafolio
          </p>
          <p className="py-6">Estos son algunos de mis trabajos realizados</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, git, skill }) => (
            <div key={id} className="shadow-md rounded-md bg-gray-800 hover:shadow-[#7121bd]">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 p-"
              />
              <div className="flex items-center justify-between">
                <div className="py-3 m-3">
                  <p className="text-gray-500 text-[12px]">
                    {skill}
                  </p>
                </div>
                <div className="flex gap-5 py-3 m-3">
                  <a href={demo} target="_blank" rel='noreferrer' className="hover:text-[#dac822] hover:scale-150 transition-all duration-300"><FaLink/></a>
                  <a href={git} target="_blank" rel='noreferrer' className="hover:text-[#dac822] hover:scale-150 transition-all duration-300"><FaGithub/></a>
                </div>
                {/*<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">Demo</a>
                  
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
          <a href={demo} target="_blank"><FaLink/></a>*/}
                  
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
