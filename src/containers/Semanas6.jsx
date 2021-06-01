import React, { useState, useEffect } from 'react'
import { apiGuardar, cargando, confirmacion, error, limpiaOtros } from '../utils/utils'
import { useHistory } from 'react-router-dom'
import { scroller } from 'react-scroll'

import Header from '../components/Header'
import Botonera from './Botonera'
import Control from './Control'
import Clinica from './Clinica'

const Semanas6 = ({global}) =>  {
  let history = useHistory();
  const [selSemanas6, setSelSemanas6] = useState({ reduccion: '', posicion: '', perdida: '', perdida_otro: '', tug: '', herida: '', herida_otro: '', vas: 0 })
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')

  const actualizaValores = (nombre, valor) => {
    setSelSemanas6({ ...selSemanas6, [nombre] : valor }) 
  }
  
  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [selSemanas6])


  const recarga = () => {
    const propiedades = Object.keys(selSemanas6)
    const resultados = Object.values(selSemanas6)

    const validar = []
    resultados.forEach((e, i) => {
      (e === '') && validar.push(propiedades[i])
    })
    setValidador(validar)
    return validar
  }

  const enviarForm = () => {
    const validar = recarga()

    //quitar elemento del campo "otro"
    if (selSemanas6.perdida_otro === '' && selSemanas6.perdida.substring(0,4) !== 'Si, ') {
      var index = validar.indexOf('perdida_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    if (selSemanas6.herida_otro === '' && selSemanas6.herida.substring(0,4) !== 'Otro') {
      var index = validar.indexOf('herida_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    
    // Esta vacio el array puede enviar la informacion a la API
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      const datosLimpios = limpiaOtros(selSemanas6, 'semanas6')
      apiGuardar('/v1/semanas6s', datosLimpios, global.responsable.id, global.identificacion, global.token)
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

  let validadorReduccion, validadorPosicion, validadorPerdida, validadorTug, validadorHerida = false

  validadorReduccion = (validador.includes('reduccion'))
  validadorPosicion = (validador.includes('posicion'))
  validadorPerdida = (validador.includes('perdida'))
  validadorTug = (validador.includes('tug'))
  validadorHerida = (validador.includes('herida'))

  if (selSemanas6.herida.substring(0,4) === 'Otro') {
    validadorHerida = selSemanas6.herida_otro === ''
  } else {
    validadorHerida = validador.includes('herida')
  }
  if (selSemanas6.perdida.substring(0,4) === 'Si, ') {
    validadorPerdida = selSemanas6.perdida_otro === ''
  } else {
    validadorPerdida = validador.includes('perdida')
  }
  
  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />

        <Control acumulador={ actualizaValores } validadorReduccion={validadorReduccion} validadorPosicion={validadorPosicion} validadorPerdida={validadorPerdida} datos={selSemanas6.perdida_otro} />
        <Clinica acumulador={ actualizaValores } validadorTug={validadorTug} validadorHerida={validadorHerida} datos={selSemanas6.herida_otro} />

        <Botonera enviarInfo={ enviarForm } botonActivo={ botonActivo } titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Semanas6