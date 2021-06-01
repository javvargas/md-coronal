import React, { useState, useEffect } from 'react'
import { apiGuardar, cargando, confirmacion, error, limpiaOtros } from '../utils/utils'
import { useHistory } from 'react-router-dom'
import { scroller } from 'react-scroll'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Botonera from './Botonera'
import Radio from '../components/Radio'

const Cirugia = ({global}) => {
  let history = useHistory();
  const datosIntraoperatoria = [{id: 1, item: 'Si'}, {id: 2, item: 'No'}]
  const datosFijacion = [{id: 1, item: 'Clavo cefalomedular uniaxial'}, {id: 2, item: 'Clavo cefalomedular biaxial'}, {id: 3, item: 'DHS-Clavo/Placa'}, {id: 4, item: 'Placa anatómica femur proximal'}, {id: 5, item: 'Otros:'}]
  const datosManiobras = [{id: 1, item: 'Pinzas'}, {id: 2, item: 'Cerclaje'}, {id: 3, item: 'Osteosíntesis con tornillo'}, {id: 4, item: 'Gancho de Lambotte en el macizo trocantérico'}, {id: 5, item: 'Ajuste en el punto de entrada'}, {id: 6, item: 'Osteosíntesis al trocánter mayor'}, {id: 7, item: 'No'}, {id: 8, item: 'Otros:'}]
  const datosComplicacion = [{id: 1, item: 'No'}, {id: 2, item: 'Si, explique'}]
  
  const [selCirugia, setSelCirugia] = useState({ intraoperatoria: '', fijacion: '', fijacion_otro: '', maniobras: '', maniobras_otro: '', complicacion: '', complicacion_otro: '' })
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')

  const actualizaValores = (nombre, valor) => {
    setSelCirugia({ ...selCirugia, [nombre] : valor }) 
  }
  
  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [selCirugia])


  const recarga = () => {
    const propiedades = Object.keys(selCirugia)
    const resultados = Object.values(selCirugia)

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
    if (selCirugia.fijacion_otro === '' && selCirugia.fijacion.substring(0,4) !== 'Otro') {
      var index = validar.indexOf('fijacion_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    if (selCirugia.maniobras_otro === '' && selCirugia.maniobras.substring(0,4) !== 'Otro') {
      var index = validar.indexOf('maniobras_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    if (selCirugia.complicacion_otro === '' && selCirugia.complicacion.substring(0,4) !== 'Si, ') {
      var index = validar.indexOf('complicacion_otro');
      if (index !== -1) {
        validar.splice(index, 1);
      }
    }
    
    // Esta vacio el array puede enviar la informacion a la API
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      const datosLimpios = limpiaOtros(selCirugia, 'cirugia')
      apiGuardar('/v1/cirugias', datosLimpios, global.responsable.id, global.identificacion, global.token)
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

  let validadorIntraoperatoria, validadorFijacion, validacionManiobras, validacionComplicacion = false

  validadorIntraoperatoria = (validador.includes('intraoperatoria'))
  validadorFijacion = (validador.includes('fijacion'))
  validacionManiobras = (validador.includes('maniobras'))
  validacionComplicacion = (validador.includes('complicacion'))

  if (selCirugia.fijacion.substring(0,4) === 'Otro') {
    validadorFijacion = selCirugia.fijacion_otro === ''
  } else {
    validadorFijacion = validador.includes('fijacion')
  }
  
  if (selCirugia.maniobras.substring(0,4) === 'Otro') {
    validacionManiobras = selCirugia.maniobras_otro === ''
  } else {
    validacionManiobras = validador.includes('maniobras')
  }
  
  if (selCirugia.complicacion.substring(0,4) === 'Si, ') {
    validacionComplicacion = selCirugia.complicacion_otro === ''
  } else {
    validacionComplicacion = validador.includes('complicacion')
  }

  return (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Titulo titulo="Datos de Cirugía"/>
        <Radio valores={datosIntraoperatoria} label="Identificación intraoperatoria del trazo coronal" grupo="intraoperatoria" primero acumulador={ actualizaValores } isInvalid={validadorIntraoperatoria} />
        <Radio valores={datosFijacion} label="Método de fijación" grupo="fijacion" acumulador={ actualizaValores } isInvalid={validadorFijacion} datos={selCirugia.fijacion_otro} />
        <Radio valores={datosManiobras} label="Maniobras adicionales" grupo="maniobras" acumulador={ actualizaValores } isInvalid={validacionManiobras} datos={selCirugia.maniobras_otro} />
        <Radio valores={datosComplicacion} label="Complicación intraoperatoria" grupo="complicacion" acumulador={ actualizaValores } isInvalid={validacionComplicacion} datos={selCirugia.complicacion_otro} />
        <Botonera enviarInfo={ enviarForm } botonActivo={ botonActivo } titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Cirugia