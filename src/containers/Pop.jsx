import React, { useState, useEffect } from 'react'
import { apiGuardar, cargando, confirmacion, error } from '../utils/utils'
import { useHistory } from 'react-router-dom'
import { scroller } from 'react-scroll'

import Header from '../components/Header'
import Botonera from './Botonera'
import Radiografia from './Radiografia'

const Pop = ({global}) => {
  let history = useHistory();
  const [selPop, setSelPop] = useState({
    lateral: '',
    posicion: '',
    rx: '',
    soporte: ''
  })
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')

  const actualizaValores = (nombre, valor) => {
    setSelPop({ ...selPop, [nombre] : valor }) 
  }
  
  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [selPop])


  const recarga = () => {
    const propiedades = Object.keys(selPop)
    const resultados = Object.values(selPop)

    const validar = []
    resultados.forEach((e, i) => {
      (e === '') && validar.push(propiedades[i])
    })
    setValidador(validar)
    return validar
  }

  const enviarForm = () => {
    const validar = recarga()

    // Esta vacio el array puede enviar la informacion a la API
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      apiGuardar('/v1/pops', selPop, global.responsable.id, global.identificacion, global.token)
      .then(resultado => {
        if (resultado === 'OK') {
          confirmacion()
        } else {
          error(resultado)
        }
        history.push('/')
      })
    } else { //si hay errores de validacion, muestra el campo a arreglar
      scroller.scrollTo(validar[0], {duration: 1000, smooth: true, offset: -150 })
    }
  }


  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <form >
          <Header /> 
          <Radiografia acumulador={ actualizaValores } validador={validador} />

          <Botonera enviarInfo={ enviarForm } botonActivo={ botonActivo } titulo1="Enviar" titulo2="Atrás" doble={true}  />
        </form>
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Pop