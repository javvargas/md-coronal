import React, { useState, useEffect } from 'react'
import { apiGuardar, cargando, confirmacion, error, limpiaOtros } from '../utils/utils'
import { useHistory } from 'react-router-dom'
import { scroller } from 'react-scroll'

import Header from '../components/Header'
import Botonera from './Botonera'
import Control from './Control'
import Clinica from './Clinica'
import Eq5d from './Eq5d'

const Meses6 = ({global}) => { 
  let history = useHistory();
  const [selMeses6, setSelMeses6] = useState({ reduccion: '', posicion: '', perdida: '', perdida_otro: '', tug: '', herida: '', herida_otro: '', vas: 0, movilidad: '', cuidado: '', actividades: '', dolor: '', ansiedad: '' })
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')

  const actualizaValores = (nombre, valor) => {
    setSelMeses6({ ...selMeses6, [nombre] : valor }) 
  }
  
  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [selMeses6])


  const recarga = () => {
    const propiedades = Object.keys(selMeses6)
    const resultados = Object.values(selMeses6)

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
    if (selMeses6.perdida_otro === '' && selMeses6.perdida.substring(0,4) !== 'Si, ') {
      var index = validar.indexOf('perdida_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    if (selMeses6.herida_otro === '' && selMeses6.herida.substring(0,4) !== 'Otro') {
      var index = validar.indexOf('herida_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    
    // Esta vacio el array puede enviar la informacion a la API
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      const datosLimpios = limpiaOtros(selMeses6, 'meses6')
      apiGuardar('/v1/meses6s', datosLimpios, global.responsable.id, global.identificacion, global.token)
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

  let validadorReduccion, validadorPosicion, validadorPerdida, validadorTug, validadorHerida, validadorMovilidad, validadorCuidado, validadorActividades, validadorDolor, validadorAnsiedad = false

  validadorReduccion = (validador.includes('reduccion'))
  validadorPosicion = (validador.includes('posicion'))
  validadorPerdida = (validador.includes('perdida'))
  validadorTug = (validador.includes('tug'))
  validadorHerida = (validador.includes('herida'))
  validadorMovilidad = (validador.includes('movilidad'))
  validadorCuidado = (validador.includes('cuidado'))
  validadorActividades = (validador.includes('actividades'))
  validadorDolor = (validador.includes('dolor'))
  validadorAnsiedad = (validador.includes('ansiedad'))

  if (selMeses6.herida.substring(0,4) === 'Otro') {
    validadorHerida = selMeses6.herida_otro === ''
  } else {
    validadorHerida = validador.includes('herida')
  }
  if (selMeses6.perdida.substring(0,4) === 'Si, ') {
    validadorPerdida = selMeses6.perdida_otro === ''
  } else {
    validadorPerdida = validador.includes('perdida')
  }
  
  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />

        <Control acumulador={ actualizaValores } validadorReduccion={validadorReduccion} validadorPosicion={validadorPosicion} validadorPerdida={validadorPerdida} datos={selMeses6.perdida_otro}/>
        <Clinica acumulador={ actualizaValores } validadorTug={validadorTug} validadorHerida={validadorHerida} datos={selMeses6.herida_otro} />
        <Eq5d acumulador={ actualizaValores } validador={validador} />

        <Botonera enviarInfo={ enviarForm } botonActivo={ botonActivo } titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}
export default Meses6