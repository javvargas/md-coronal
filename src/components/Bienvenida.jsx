import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'

const Bienvenida = ({genero, especialista}) => {

  const saludo = {'Hombre': 'Bienvenido', 'Mujer': 'Bienvenida'}
  const sigla = {'Hombre': 'Dr.', 'Mujer': 'Dra.'}

  return (
    <div className="flex justify-between items-center bg-white py-4 px-4 rounded-xl my-5 shadow-lg w-11/12 md:w-full mx-auto border border-teal-400 font-medium">
      <div className="mr-5">
        <p className="text-sm">{saludo[genero]}</p>
        <p className="text-lg">{sigla[genero]} {especialista}</p>
      </div>

      <Link to='/admin'>
        <button className="inline-block px-3 py-3 text-xs font-medium  text-center transition rounded-lg shadow ripple hover:shadow-lg focus:outline-none text-cyan-100 bg-teal-500 hover:bg-teal-700">
          <FontAwesomeIcon icon={faUsersCog} className="text-green-200 text-2xl pointer-events-none group-hover:text-cyan-600 sm:block" />
        </button>
      </Link>

    </div>

  )
}

export default Bienvenida