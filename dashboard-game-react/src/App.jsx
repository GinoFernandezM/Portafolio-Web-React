import { useState } from "react";
import { RiHome3Line, RiFirefoxLine, RiLayoutGridLine, RiTeamLine, RiLiveLine, RiDownload2Line, RiSettings3Line, RiMenu3Fill, RiCloseLine, RiNotification3Line, RiSearch2Line} from "react-icons/ri";
import port from "./img/port.jpg"
import fornite from "./img/fornite.jpeg"
import './App.css'


export default function App() {

  const[showMenu,setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="w-full min-h-screen grid ">
      <div className="bg-[#141414] flex flex-wrap relative w-full h-full justify-center ">

        {/* header */}
        <header className="h-1/6 w-full flex items-center border-b  border-gray-700">

          <h1 className="w-1/5 text-gray-300 uppercase text-xl font-bold tracking-[1px]" >
                App  Store  Game
          </h1>

          <nav className="w-3/5 flex items-center gap-10 pl-8">  
            <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full">Discover</a>
            <a href="#" className="text-gray-500 py-2 px-4 rounded-full">Browse</a>
            <a href="#" className="text-gray-500 py-2 px-4 rounded-full">WishList</a>
            
          </nav>

          <div className="w-1/5 mr-10"> 
            <ul className="flex items-center">
              <li>
                <a href="#" className="text-gray-500 text-lg mr-8">
                  {" "}
                  <RiNotification3Line/>
                  {" "}
                </a>
              </li>
              <li>
                <form className="relative">
                  <RiSearch2Line className="text-gray-500 absolute top-1 left-1"/>
                  <input type="text" className="bg-[#232323] text-gray-300 outline-none rounded-xl pl-8 pr-4" placeholder="Search" />
                </form>
              </li>
            </ul> 
          </div>
        </header>

        {/* SideLeft */}
        <div className={`h-5/6 w-1/6 overflow-y-hidden border-r  border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all lg:left-0 ${showMenu?'left-0':'-left-full'}`}> 

          <div>

            <ul>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiHome3Line />
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiFirefoxLine />
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiLayoutGridLine />
                  Library
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiTeamLine />
                  Friends
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiLiveLine />
                  Live
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiDownload2Line />
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <RiSettings3Line />
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors" >
                  <img src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg"  className="w-5 h-5 object-cover rounded-full "/>
                  Atom
                </a>
              </li>
            </ul>
          </div>

          {/* menu movil */}
          <button onClick={toggleMenu} className="lg:hidden bg-blue-600 text-white fixed bottom-6 right-6 p-2 text-lg rounded-full">

            {showMenu?<RiCloseLine />:<RiMenu3Fill />}
            
          </button>    


        </div>

        {/* Menu */}
        <div className="h-5/6 w-5/6 bg-[#141414] p-4">

          <div className="grid lg:grid-cols-6 h-[500px] rounded-xl overflow-hidden gap-2">

            <div className=" col-span-5 relative h-[500px]" >
              <img src={port} className="w-full h-full object-cover"/>
              <h1 className="absolute top-5 left-8 text-white text-3xl uppercase font-bold">Fornite</h1>
              <div className="absolute text-white top-[300px] left-8 max-w-xl">
                <p className="text-gray-300 mb-2">Update</p>
                <h2 className="text-3xl mb-3 font-bold">The hunt is on Fornite Chapter 2 - <br/>
                  Season 5: Zero Point.
                </h2>
                <button className="px-4 py-2 bg-blue-600 rounded-lg text-gray-200">Play for free</button>
              </div>
            </div>


            <div className=" col-span-1 px-6 py-2 text-white text-lg font-bold h-[500px] bg-[#232323]">
              <ul className="overflow-y-auto scroll-smooth h-full scrollbar">
                <li className="mb-6">
                  <a href="#"  className="flex items-center gap-5">
                    <img src={fornite} alt="fornite" className="object-cover h-24 w-20 rounded-md"/>
                    Fornite
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#"  className="flex items-center gap-5">
                    <img src={fornite} alt="fornite" className="object-cover h-24 w-20 rounded-md"/>
                    Fornite
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#"  className="flex items-center gap-5">
                    <img src={fornite} alt="fornite" className="object-cover h-24 w-20 rounded-md"/>
                    Fornite
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#"  className="flex items-center gap-5">
                    <img src={fornite} alt="fornite" className="object-cover h-24 w-20 rounded-md"/>
                    Fornite
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#"  className="flex items-center gap-5">
                    <img src={fornite} alt="fornite" className="object-cover h-24 w-20 rounded-md"/>
                    Fornite
                  </a>
                </li>
                
              </ul>
      
            </div>
          </div>

          {/* videogames store*/}
          <div>
            <span>Games On Sale </span>
          </div>
          
        </div>


      </div>
    </div>
  )
}