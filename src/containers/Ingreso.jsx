import React, { useState, useEffect } from 'react'
import { apiGuardar, cargando, confirmacion, error } from '../utils/utils'
import { useHistory } from 'react-router-dom'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Botonera from './Botonera'
import Campo from '../components/Campo'
import Selector from '../components/Selector'
import Eq5d from './Eq5d'

const Ingreso = () => {
  let history = useHistory();

  const datosGenero = [{id: 1, item: 'Mujer'}, {id: 2, item: 'Hombre'}]
  const datosEstabilidad = [{id: 1, item: 'Estable'}, {id: 2, item: 'Inestable'}, {id: 3, item: 'Severamente Inestable'}]
  const datosSospecha = [{id: 1, item: 'Si'}, {id: 2, item: 'No'}, {id: 3, item: 'Posiblemente'}]
  const datosIdentifica = [{id: 1, item: 'Si'}, {id: 2, item: 'No'}, {id: 3, item: 'Otro:'}]

  const [selIngreso, setSelIngreso] = useState({ nombre: '', identificacion: '', edad: '', genero: '', clasificacion: '', estabilidad: '', sospecha: '', identifica: '', identifica_otro: '', movilidad: '', cuidado: '', actividades: '', dolor: '', ansiedad: '' })
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')

  const actualizaValores = (nombre, valor) => {
    setSelIngreso({ ...selIngreso, [nombre] : valor }) 
  }
  
  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [selIngreso])


  const recarga = () => {
    const propiedades = Object.keys(selIngreso)
    const resultados = Object.values(selIngreso)

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
    if (selIngreso.identifica_otro === '' && selIngreso.identifica.substring(0,4) !== 'Otro') {
      var index = validar.indexOf('identifica_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
        
    // Esta vacio el array puede enviar la informacion a la API
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      apiGuardar('/v1/ingresos', selIngreso, 2)
      .then(resultado => {
        if (resultado === 'OK') {
          confirmacion()
        } else {
          error(resultado)
        }
        history.push('/')
      })
    }
  }



  let validadorNombre, validadorIdentificacion, validadorEdad, validadorGenero, validadorClasificacion, validadorEstabilidad, validadorSospecha, validadorIdentifica, validadorOlvide = false

  validadorNombre = (validador.includes('nombre'))
  validadorIdentificacion = (validador.includes('identificacion'))
  validadorEdad = (validador.includes('edad'))
  validadorGenero = (validador.includes('genero'))
  validadorClasificacion = (validador.includes('clasificacion'))
  validadorEstabilidad = (validador.includes('estabilidad'))
  validadorSospecha = (validador.includes('sospecha'))
  validadorOlvide = (validador.includes('olvide'))

  if (selIngreso.identifica.substring(0,4) === 'Otro') {
    validadorIdentifica = selIngreso.identifica_otro === ''
  } else {
    validadorIdentifica = validador.includes('identifica')
  }
  
  return (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Titulo titulo="Ingreso" />
        <Campo name="nombre" label="Nombre" tipo="text" primero={true} acumulador={ actualizaValores } isInvalid={validadorNombre}  />
        <Campo name="identificacion" label="Identificación" tipo='number' acumulador={ actualizaValores } isInvalid={validadorIdentificacion}  />
        <Campo name="edad" label="Edad" tipo='number' acumulador={ actualizaValores } isInvalid={validadorEdad} />
        <Radio valores={datosGenero} label="Genero" grupo="genero" acumulador={ actualizaValores } isInvalid={validadorGenero} />
        <Selector name="clasificacion" label="Clasificación AO inicial" acumulador={ actualizaValores } isInvalid={validadorClasificacion} />
        <Radio valores={datosEstabilidad} label="Estabilidad según clasificación AO" grupo="estabilidad" acumulador={ actualizaValores } isInvalid={validadorEstabilidad} />
        <Radio valores={datosSospecha} label="¿Sospecha de trazo coronal?" grupo="sospecha" acumulador={ actualizaValores } isInvalid={validadorSospecha} />
        <Radio valores={datosIdentifica} label="¿Se identifica trazo coronal en RX simple AP y lateral?" grupo="identifica" acumulador={ actualizaValores } isInvalid={validadorIdentifica} datos={selIngreso.identifica_otro} />

        <Eq5d acumulador={ actualizaValores } validador={validador} />

        <Botonera enviarInfo={ enviarForm } botonActivo={ botonActivo } titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Ingreso