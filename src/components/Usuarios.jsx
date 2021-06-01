import React from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import cargando from '../assets/images/puff.svg'

const Usuarios = ({primero, usuarios, global}) => {

  const sigla = {'Hombre': 'Dr.', 'Mujer': 'Dra.'}

  return(
    <div className={`relative bg-white py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 border 
    ${primero ? 'rounded-b-lg' : 'rounded-lg'} border`}> 

      {usuarios.length === 0 &&
        <div className='w-16 h-16 flex mx-auto my-10 text-center'>
          <img src={cargando} alt="Cargando" className='w-screen' />
        </div>
      }

      {usuarios.map((usuario, i) => {
        if (global.responsable.admin === 1) {
          return (
            <div key={i}>
              <div className="flex hover:bg-lightBlue-50  border-t border-gray-100">
                  <div className="w-4/5 h-12 py-3 px-1">
                    <p className="hover:text-blue-dark pl-2 truncate">{sigla[usuario.genero]} {usuario.nombre}</p>
                  </div>
                  <div className="w-1/5 h-12 text-right p-2">
                    <Link to={`/editar/${usuario.id}`}>
                      <button className="inline-block px-2 py-2 text-xs font-medium  text-center transition rounded-lg shadow ripple hover:shadow-lg focus:outline-none text-cyan-100 bg-teal-500 hover:bg-teal-700">
                        <FontAwesomeIcon icon={faUserEdit} className="text-green-200 text-base pointer-events-none group-hover:text-cyan-600 sm:block" />
                      </button>
                    </Link>
                  </div>
                </div>
            </div>
          )
        } else {
          if (global.responsable.id === usuario.id) {
            return (
              <div key={i}>
                <div className="flex hover:bg-lightBlue-50  border-t border-gray-100">
                    <div className="w-4/5 h-12 py-3 px-1">
                      <p className="hover:text-blue-dark pl-2 truncate">{sigla[usuario.genero]} {usuario.nombre}</p>
                    </div>
                    <div className="w-1/5 h-12 text-right p-2">
                      <Link to={`/editar/${usuario.id}`}>
                        <button className="inline-block px-2 py-2 text-xs font-medium  text-center transition rounded-lg shadow ripple hover:shadow-lg focus:outline-none text-cyan-100 bg-teal-500 hover:bg-teal-700">
                          <FontAwesomeIcon icon={faUserEdit} className="text-green-200 text-base pointer-events-none group-hover:text-cyan-600 sm:block" />
                        </button>
                      </Link>
                    </div>
                  </div>
              </div>
            )
          }
        }

      })}

    </div>

  )
}

export default Usuarios