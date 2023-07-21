import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

import {GiWorld } from "react-icons/gi";

import {AiOutlineMonitor } from "react-icons/ai";

import {DiGitCompare} from "react-icons/di";
import { HiUserGroup } from "react-icons/hi";
import {TiWorld} from "react-icons/ti";
import {TbGitCompare } from "react-icons/tb";
import {ImSearch} from "react-icons/im";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (submenuNumber) => {
    setActiveSubmenu((prevSubmenu) => (prevSubmenu === submenuNumber ? null : submenuNumber));
  };
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className=" text-2xl font-bold text-white mb-10">
            Red de calidad de Aire <span className="text-primary text-2xl"></span>
          </h1>
          <ul>

          <h1 className="flex font-bold text-white text-xs mb-1">
          <span className="ml-4">RED DE ESTACIONES</span>
          <span className="text-primary text-sm"></span>
          </h1>
            {/* Menu items */}
            <li>
            <button
                onClick={() => toggleSubmenu(1)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <GiWorld className="text-primary" /> Estaciones
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${activeSubmenu === 1 ? "rotate-90" : ""} transition-all`}
                />
              </button>
              <ul
                className={`${
                  activeSubmenu === 1 ? "h-[50px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link to="/Localizacion"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Mapa localizacion
                  </Link>
                </li>
              </ul>
            </li>

            <li>
            <button
                onClick={() => toggleSubmenu(2)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <AiOutlineMonitor className="text-primary" /> Monitoreo
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${activeSubmenu === 2 ? "rotate-90" : ""} transition-all`}
                />
              </button>
              <ul
                className={`${
                  activeSubmenu === 2 ? "h-[80px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Geo-Espaciales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Temporalidad
                  </Link>
                </li>
              </ul>
            </li>

            <li>
            <button
                onClick={() => toggleSubmenu(3)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <DiGitCompare className="text-primary" /> Comparativas
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${activeSubmenu === 3 ? "rotate-90" : ""} transition-all`}
                />
              </button>
              <ul
                className={`${
                  activeSubmenu === 3 ? "h-[80px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="./pages/admin/Home"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Por Ubicacion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Por Tiempo
                  </Link>
                </li>
              </ul>
            </li>

            <h1 className="flex font-bold text-white text-xs mb-1">
            <span className="ml-4 mt-4">RED DE ESTACIONES METEOROLÓGICAS</span>
            <span className="text-primary text-sm"></span>
            </h1>

            <li>
            <button
                onClick={() => toggleSubmenu(4)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <TiWorld className="text-primary" /> Meteorologica
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${activeSubmenu === 4 ? "rotate-90" : ""} transition-all`}
                />
              </button>
              <ul
                className={`${
                  activeSubmenu === 4 ? "h-[50px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Mapa localizacion
                  </Link>
                </li>
               
              </ul>
            </li>

            <li>
            <button
                onClick={() => toggleSubmenu(5)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <ImSearch className="text-primary" /> Monitoreo
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${activeSubmenu === 5 ? "rotate-90" : ""} transition-all`}
                />
              </button>
              <ul
                className={`${
                  activeSubmenu === 5 ? "h-[80px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Geo-Espaciales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Temporalidad
                  </Link>
                </li>              
              </ul>
            </li>

            <li>
            <button
                onClick={() => toggleSubmenu(6)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <TbGitCompare className="text-primary" /> Comparativas
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${activeSubmenu === 6 ? "rotate-90" : ""} transition-all`}
                />
              </button>
              <ul
                className={`${
                  activeSubmenu === 6 ? "h-[80px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Por Ubicacion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Por Tiempo
                  </Link>
                </li>              
              </ul>
            </li>

            <h1 className="flex font-bold text-white text-xs mb-1">
            <span className="ml-4 mt-4">COLABORADORES</span>
            <span className="text-primary text-sm"></span>
            </h1>

            <li>
            <button
                onClick={() => toggleSubmenu(7)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <HiUserGroup className="text-primary" /> Equipo
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${activeSubmenu === 6 ? "rotate-90" : ""} transition-all`}
                />
              </button>
              <ul
                className={`${
                  activeSubmenu === 7 ? "h-[50px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Proyecto
                  </Link>
                </li>            
              </ul>
            </li>

          </ul>
        </div>
        <nav>

        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

    </>
  );
};

export default Sidebar;
