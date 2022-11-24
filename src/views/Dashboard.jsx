import React from 'react'
import { useQuery } from 'react-query'
import SearchBar from '../components/SearchBar'
import { getAsesorias } from '../../API'




export default function Dashboard() {


  const asesoriasBody = {
    "orderBy": {
      "idAsesoria": "desc"
    },
    // "take": 3
  }
  const { data: asesorias } = useQuery('asesorias', () => getAsesorias(asesoriasBody))

  return (
    <div className='h-screen'>
      <SearchBar logged={true} />
      <div className="p-4">

        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-600">
          Dashboard
        </h1>
        <div className="flex w-full mt-8 gap-4 h-[80vh]">
          <div className="flex w-2/3 bg-black bg-opacity-30 p-3 rounded-xl flex-col">
            <h1 className='text-3xl font-semibold'>Asesorías destacadas ⭐</h1>
            <div className="flex gap-8 flex-col mt-8 overflow-y-auto">
              {/* ACA VAN LAS DESTACADAS */}
              {asesorias && asesorias.map((as, i) => (
                <div className='border-t-2 border-black border-opacity-20 flex flex-col pt-6' key={i}>
                  <h2 className='font-semibold text-xl'>{as.name}</h2>
                  <div className="flex">

                    <p className='w-5/6'>{as.description}</p>
                    <button className='bg-gradient-to-r from-purp to-blu p-2 font-semibold rounded-full'>Leer más +</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-1/3 bg-black bg-opacity-30 p-3 rounded-xl">
            <h1 className='text-3xl font-semibold'>Asesorías programadas 📅</h1>
            <div className="overflow-y-auto">
              {/* ACA VAS LAS CITAS */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
