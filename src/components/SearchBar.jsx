import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo";
import downArrow from "../assets/downArrow.svg";

export default function SearchBar() {
  const [openSearchType, setOpenSearchType] = useState(false);
  const [selectedSearchType, setSelectedSearchType] = useState("Nombre");
  const searchTypes = [
    { name: "Nombre", checked: true },
    { name: "Profesor", checked: false },
  ];
  return (
    <div className="flex w-screen h-16 bg-gris-900 p-2">
      <Link to="/">
        <Logo />
      </Link>
      <div className="grid place-items-center w-1/3">
        <input
          type="text"
          className="ml-8 rounded-full h-2/3 w-full px-4"
          placeholder="Buscar..."
        />
      </div>
      <div className="h-full grid place-items-center">
        <button
          onClick={(e) => setOpenSearchType(!openSearchType)}
          className=" grid place-items-center ml-8 h-full"
        >
          <div className="flex">
            <h3 className="h-full">{selectedSearchType}</h3>
            {/* <div className="grid place-items-center h-full"> */}
            {/* </div> */}
            <img src={downArrow} alt="" className="h-6 ml-1" />
          </div>
        </button>
      </div>
      <div
        class={`${
          openSearchType
            ? `top-full opacity-100 visible`
            : "top-[110%] invisible opacity-0"
        } relative z-40 rounded-xl bg-gris-900 py-5 shadow-card transition-all h-fit right-24 px-5`}
      >
        {searchTypes.map((elem, i) => (
          <div className="flex mb-2" key={i}>
            <input
              type="radio"
              defaultChecked={elem.checked}
              className="mr-4 option-input"
              name="search-type"
            />
            <p>{elem.name}</p>
          </div>
        ))}
      </div>
      <button className = '-ml-20 bg-gris-800 px-4 rounded-xl font-bold'>Buscar</button>
      <div className="flex flex-row-reverse w-full">
        <button className="bg-gris-700 px-4 rounded-xl">Iniciar sesión</button>
      </div>
    </div>
  );
}
