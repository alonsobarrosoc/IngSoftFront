import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo";
import downArrow from "../assets/downArrow.svg";
import { useQuery } from "react-query";
import { getAsesorias } from "../../API";

export default function SearchBar(props) {
  const { logged } = props
  const [openSearchType, setOpenSearchType] = useState(false);
  const [selectedSearchType, setSelectedSearchType] = useState("Nombre");
  const [search, setSearch] = useState('')
  const searchTypes = [
    { name: "Nombre", checked: true },
    { name: "Profesor", checked: false },
  ];
  const nombreQuery = {
    "select": {
      "name": true,
      "idAsesoria": true
    }
  }
  const profeQuery = {
    "select": {
      "Usuario": {
        "select": {
          "email": true,
          "name": true
        }
      }
    },
    "distinct": ["idProfesor"]
  }

  const { data: profesores } = useQuery('profesores', () => getAsesorias(profeQuery).then((res) => {
    let arr = []
    res.map(el => {
      arr.push({
        text: el.Usuario.name,
        value: el.Usuario.email
      })
    })
    return arr
  }))
  const { data: nombre } = useQuery('nombre', () => getAsesorias(nombreQuery).then(res => {
    let arr = []
    res.map(el => {
      arr.push({
        text: el.name,
        value: el.idAsesoria
      })
    })
    return arr
  }))

  function filterAndMapOptions() {
    let arr = []
    if (selectedSearchType == 'Nombre') {
      arr = nombre
    } else if (selectedSearchType == 'Profesor') {
      arr = profesores
    }
    "".toLowerCase()
    return (
      arr
        .filter(el => {
          if ((el.text).toLowerCase().includes(search.toLocaleLowerCase())) {
            return el
          }
        })
        .map((el, i) => (
          <Link to = {`/curso?${selectedSearchType == "Nombre" ? "idAsesoria" : "email"}=${el.value}`} key={i}>
            <button className="hover:bg-stone-600 w-full  border-b-2 border-gris-700 py-2">
              <h2 className='text-left'>{el.text}</h2>
            </button>
          </Link>
        ))
    )
  }

  return (
    <div className="flex w-screen h-16 bg-gris-900 p-2">
      <Link to="/">
        <div className="">
          <div className="grid place-items-center h-12 w-12">
            <Logo h="full" w="full" />
          </div>
        </div>

      </Link>
      <div className="grid place-items-center w-1/3 relative">
        <input
          type="text"
          className={`ml-8 ${search.length == 0 ? "rounded-2xl" : "rounded-t-2xl"} h-2/3 w-full px-4 border-none focus:ring-0 focus:outline-none`}
          placeholder="Buscar..."
          onChange={e => setSearch(e.target.value)}
        />
        {search.length != 0 && (
          <>
            <div className="absolute top-10 left-4 px-4 bg-[#3B3B3B] w-full rounded-b-2xl border-t-2 border-gris-800 border-opacity-30 py-3 flex flex-col">
              {filterAndMapOptions()}
            </div>
          </>
        )}
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
        className={`${openSearchType
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
              onChange={e => setSelectedSearchType(elem.name)}
            />
            <p>{elem.name}</p>
          </div>
        ))}
      </div>
      {/* <button className='-ml-20 bg-gris-800 px-4 rounded-xl font-bold'>Buscar</button> */}
      <div className="flex flex-row-reverse w-full">
        {logged ? (
          <Link className='h-full' to='/' onClick={e => localStorage.removeItem('token')}>
            <button className="bg-red-800 bg-opacity-70 px-4 rounded-xl h-full">Cerrar sesión</button>
          </Link>
        ) : (
          <Link className='h-full' to='login'>
            <button className="bg-gris-700 px-4 rounded-xl h-full">Iniciar sesión</button>
          </Link>
        )}
      </div>
    </div>
  );
}
