import React from 'react'




export default function TarjetaCurso(props) {
  const { curso, odd } = props

  return (
    <>
      <div className={`${odd ? "bg-cyan-500 shadow-lg shadow-cyan-500/50" : "bg-indigo-600 shadow-lg shadow-indigo-500/50"} rounded-xl text-white font-extrabold w-1/3 p-6 text-3xl`}>
        <h1>{curso.name}</h1>
        <p className = "text-base text-xl text-black font-bold">
          {curso.description}
        </p>

      </div>
    </>
  )
}
