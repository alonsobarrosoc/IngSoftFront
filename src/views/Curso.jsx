import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useSearchParams } from 'react-router-dom'
import { findUser, findUserPhoto, getAsesorias } from '../../API'
import SearchBar from '../components/SearchBar'






export default function Curso() {

  const [params, setParams] = useSearchParams()

  return (
    <>
      <SearchBar logged={true} />
      {params.has("idAsesoria") && (
        <Nombre idAsesoria={Number(params.get("idAsesoria"))} />
      )}
      {params.has("email") && (
        <Profesor email={params.get("email")} />
      )}
    </>
  )
}

function Profesor(props) {
  const { email } = props
  const cursosProfesorBody = {
    where: {
      idProfesor: email
    }
  }
  const profesorBody = {
    email: email
  }
  const { data: cursosDelProfesor } = useQuery('cursos-profesor',
    () => getAsesorias(cursosProfesorBody))
  let { data: profesor } = useQuery(['profesor', email],
    () => findUser(profesorBody))
  profesor = Array.isArray(profesor) ? profesor[0] : {}
  return (
    <>
      <div className="flex">
        <PerfilProfesor profesor={profesor} />
        <div className="flex flex-col p-6 w-full">

          <h1 className='font-extrabold text-5xl'>Asesorias de: {profesor.name}</h1>
          <div className="flex flex-col mt-8 w-full">

            {cursosDelProfesor && cursosDelProfesor.map((el, i) => (
              <div key={i} className='border-b-2 border-black border-opacity-25 w-full'>
                <div className="flex w-full">
                  <div className="flex flex-col w-5/6">
                    <h1 className='font-bold'>{el.name}</h1>
                    <p>
                      {el.description}
                    </p>
                  </div>
                  <Link to={`/curso?idAsesoria=${el.idAsesoria}`} className="bg-gradient-to-r from-blu to-purp mb-5 rounded-full px-2 font-bold">
                    Leer mas +
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function Nombre(props) {
  const { idAsesoria } = props
  const [disp, setDisp] = useState({})
  const asesoriaBody = {
    where: {
      idAsesoria: idAsesoria
    }
  }

  let { data: asesoria } = useQuery('asesoria',
    () => getAsesorias(asesoriaBody))

  asesoria = Array.isArray(asesoria) ? asesoria[0] : {}

  Array.isArray(asesoria) ? setDisp(JSON.stringify(asesoria.availability)) : []

  let email = asesoria.idProfesor
  const profesorBody = {
    email: email
  }
  const { data: profesor } = useQuery(['profesor', email],
    () => findUser(profesorBody))


  return (
    <>
      <div className="flex">
        {profesor && (

          <PerfilProfesor profesor={profesor[0]} />
        )}
        <div className="w-full p-6">

          <h1 className='font-extrabold text-5xl'>{asesoria.name}</h1>


          <div className="flex flex-col">
            <div className="my-6 w-full grid place-items-center">
              <div className="w-full bg-gris-800 rounded-2xl p-4">
                <h3 className='font-bold text-xl'>Descripción</h3>
                <p>
                  {asesoria.description}
                </p>
              </div>
            </div>
            <div className="my-6 w-full grid place-items-center">
              <div className="w-full bg-gris-800 rounded-2xl p-4">
                <h3 className='font-bold text-xl'>Otros detalles</h3>
                <div className="flex mt-6">
                  <label htmlFor="">Duración:</label>
                  <p>
                    {` ${asesoria.duration} hrs`}
                  </p>
                </div>
                <div className="flex mt-6">
                  <label htmlFor="">Precio:</label>
                  <p>
                    {` ${asesoria.price} hrs`}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-6 w-full grid place-items-center">
              <div className="w-full bg-gris-800 rounded-2xl p-4">
                <h3 className='font-bold text-xl'>Disponibilidad</h3>
                <div className="flex flex-col">
                  <div className="flex">
                    <label htmlFor="">Por favor contacta tu profesor</label>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div>

      </div>
    </>

  )
}

function PerfilProfesor(props) {
  const { profesor } = props
  const [img, setImg] = useState()
  const fetchImage = async () => {
    const res = await fetch(findUserPhoto(profesor.email));
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };


  return (
    <div className='h-5/6 w-1/4 p-4 bg-gris-800 rounded-b-2xl'>

      <h1 className='w-full font-bold text-2xl text-center'>{profesor.name}</h1>
      {/* <img alt="img-profesor" src={img} /> */}
      <h2 className='w-full font-semibold text-xl text-center'>{profesor.email}</h2>

    </div>
  )




}
