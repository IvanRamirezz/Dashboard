import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue">Información disponible entre este periodo de fechas</h1>
      <div className="flex items-center justify-between mb-10"> Primer registro: 2023-01-31 00:05:00
        <div className="flex items-center gap-2 text-3xl">
        </div>
      </div>
    </div>
  );
};

export default Home;
