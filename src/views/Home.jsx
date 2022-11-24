import React from "react";
import { useQuery } from "react-query";
import SearchBar from "../components/SearchBar";
import { getAsesorias } from '../../API'
import TarjetaCurso from '../components/TarjetaCurso'

export default function Home() {

  const asesoriasBody = {
    "orderBy": {
      "idAsesoria": "desc"
    },
    "take": 3
  }
  const { data: cursos, status } = useQuery('cursos', () => getAsesorias(asesoriasBody))
  return (
    <div className="flex flex-col">
      <div className="flex">
        <SearchBar logged={false} />
      </div>
      <div className="grid place-items-center mt-40">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-600 drop-shadow-2xl shadow-cyan-500/50">
          Asesorías ITAM
        </h1>
      </div>

      <h1 className=' mt-24 mb-4 ml-12 text-5xl font-bold'>Asesorías destacatadas:</h1>
      <div className="flex w-full justify-between px-12 gap-6">
        {cursos && cursos.map((c, i) => (
          <TarjetaCurso curso={c} key={i} odd={i % 2 == 0} />
        ))}
      </div>


    </div>
  );
}
