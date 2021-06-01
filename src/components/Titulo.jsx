import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Titulo = ({titulo, creaUsuario, global}) => (

  <div className="relative flex justify-between items-center bg-cyan-600 py-2 px-4 rounded-t-lg mt-5 shadow w-11/12 md:w-full mx-auto text-white font-medium m-0 titulo">
    {titulo}

    {(creaUsuario && global.responsable.admin === 1)  && 
      <Link to='/editar'>
        <button className="inline-block px-2 py-2 text-xs font-medium  text-center transition rounded-lg shadow ripple hover:shadow-lg focus:outline-none text-cyan-100 bg-teal-500 hover:bg-teal-700" >
          <FontAwesomeIcon icon={faUserPlus} className="text-green-200 text-base pointer-events-none group-hover:text-cyan-600 sm:block" />
        </button>
      </Link>
    }
  </div>

)

export default Titulo