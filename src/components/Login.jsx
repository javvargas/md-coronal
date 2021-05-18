import React from 'react'

import Boton from '../components/Boton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import femur from '../assets/images/femur.png'

const Login = () => {

  const handleRegistroSubmit = (e) => {
    e.preventDefault()
    console.log("Submit")
  }

  return (

    <div className="relative bg-white py-6 px-6 rounded-3xl my-16 shadow-xl w-11/12 md:w-full mx-auto border border-teal-400">

        <div className="flex items-center absolute rounded-full shadow-xl bg-teal-500 left-0 right-0 mx-auto -top-10 h-24 w-24">
            <img src={femur} alt="Femur" className="rounded-full" />
        </div>
        
        <div className="mt-12">
            <p className="text-xl font-semibold my-4 text-center ">Por favor ingrese su clave</p>
            <div className="border-t-2"></div>
        </div>
        
        <form onSubmit={handleRegistroSubmit}>
          <div className="pt-4 mt-6">
            <div className="text-gray-400 focus-within:text-gray-600 mb-3 text-center">
              
              <div className="relative flex items-center justify-center -left-2">
                <FontAwesomeIcon icon={faKey} className="relative left-8 z-20 w-4 h-4 text-blue-200 pointer-events-none fill-current group-hover:text-cyan-600 sm:block" />
                <input type="password" name="password" className="block border border-blue-200 py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800" placeholder="Password" />
              </div>
              
              <div className="mt-8">
                <Boton valor="Ingresar" ubicacion='menu'/>
              </div>
              
            </div>
          </div>
        </form>

    </div>
  )
}

export default Login