import React, { useState } from 'react'
import Logo from '../assets/Logo'
import { postLogin } from '../../API'
import rightArrow from '../assets/rightArrow.svg'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
  const initStateCredenciales = {
    email: '',
    password: ''
  }
  const [error, setError] = useState(false)
  const [credenciales, setCredenciales] = useState(initStateCredenciales)
  const navigate = useNavigate()

  async function login(e) {
    e.preventDefault();
    // console.log(credenciales);
    console.log(credenciales);
    await postLogin(credenciales).then((resp, err) => {
      if (resp.token) {
        localStorage.setItem("token", resp.token)
        console.log(resp.token);
        navigate('/dashboard')
      } else if (err) {
        setError(true)
        setCredenciales(initStateCredenciales)
      }
    })
  }

  return (
    <div className="grid place-items-center h-screen w-screen">
      <div>

        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-600">
          Iniciar sesión
        </h1>
        <div className="grid place-items-center w-full mt-6">
          <div className="bg-black p-2 rounded-2xl bg-opacity-50">
            <div className="grid place-items-center h-24 w-24">
              <Logo h="full" w="full" />
            </div>
          </div>
        </div>
        <form className='text-2xl' onSubmit={e => login(e)}>
          <div className="flex flex-col gap-4">

            <label htmlFor="" className="font-semibold">Correo:</label>
            <input className='rounded-xl px-2 py-1' name="" type="text" onChange={e => setCredenciales({
              ...credenciales, email: e.target.value
            })} />
          </div>
          <div className="flex flex-col gap-4 mt-16">

            <label htmlFor="" className="font-semibold">Contraseña:</label>
            <input className='rounded-xl px-2 py-1' name="" type="password" onChange={e => setCredenciales({
              ...credenciales, password: e.target.value
            })} />
          </div>
          <div className="w-full grid justify-items-end mt-8">
            {error && (

              <div className="w-full grid place-items-center h-24">
                <div className="w-fit p-2 bg-black opacity-50 rounded-xl">
                  <p>
                    Ocurrió un error, checa tus credenciales
                  </p>
                </div>
              </div>
            )}



            <button type='submit' className='w-16 bg-black rounded-xl bg-opacity-50 px-2'>
              <img alt="" src={rightArrow} className='fill-white' />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
