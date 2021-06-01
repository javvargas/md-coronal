import React, { useState } from 'react'
import { apiLogin, cargando, cerrarSwal, error } from '../utils/utils'
import { useHistory } from 'react-router-dom'

import Boton from '../components/Boton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

import femur from '../assets/images/femur.png'

const Login = ({global, setGlobal}) => {
  let history = useHistory();
  const [ingreso, setIngreso] = useState({usuario: '', password: ''})

  const actualizaRegistro = e => {
    setIngreso({
      ...ingreso,  [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    if (ingreso.usuario !== '' && ingreso.password !== '') {
      cargando()
      apiLogin(ingreso)
      .then(response => {
        cerrarSwal()
        if (response !== 'error') {
          if (ingreso.usuario === response.responsable.usuario) {
            setGlobal({ ...global, responsable: response.responsable, token: response.token })
            history.push('/menu')
          }
        } else {
          error('No tiene acceso a la aplicación')
        }
      })
    }
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
        
        <form >
          <div className="pt-4 mt-2">
            <div className="text-gray-400 focus-within:text-gray-600 mb-3 text-center">
              
              <div className="relative flex items-center justify-center -left-2 mb-4">
                <FontAwesomeIcon icon={faUser} className="relative left-8 z-20 w-4 h-4 text-blue-200 pointer-events-none fill-current group-hover:text-cyan-600 sm:block" />
                <input onChange={ actualizaRegistro } type="text" name="usuario" className="block border border-blue-200 py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800" placeholder="Usuario" />
              </div>

              <div className="relative flex items-center justify-center -left-2">
                <FontAwesomeIcon icon={faKey} className="relative left-8 z-20 w-4 h-4 text-blue-200 pointer-events-none fill-current group-hover:text-cyan-600 sm:block" />
                <input onChange={ actualizaRegistro } type="password" name="password" className="block border border-blue-200 py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800" placeholder="Password" />
              </div>
              
              <div className="mt-6">
              <Boton 
                enviarInfo={ handleLogin } 
                //botonActivo={ props.botonActivo } 
                valor='Ingresar' 
              />

              </div>
              
            </div>
          </div>
        </form>

    </div>
  )
}

export default Login