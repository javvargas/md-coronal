import React, { useState, useEffect } from 'react'

const Radio = ({ valores, grupo, label, primero, imagen, name, seleccion, acumulador, isInvalid, datos }) => {

  const [ingreso_identifica, setIngreso_identifica] = useState(false)
  const [tac_tac, setTac_tac] = useState(false)
  const [cirugia_fijacion, setCirugia_fijacion] = useState(false)
  const [cirugia_maniobras, setCirugia_maniobras] = useState(false)
  const [cirugia_complicacion, setCirugia_complicacion] = useState(false)
  const [semanas2_herida, setSemanas2_herida] = useState(false)
  const [semanas6_perdida, setSemanas6_perdida] = useState(false)
  const [cuales, setCuales] = useState('¿Cuál?')
  
  const handleChange = e => {
    //console.log(e.target.name, e.target.value, e.target.id)

    //seleccion de menu
    if (e.target.name === 'menu') {
      seleccion(e.target.id)
    } else {
      //campos de otros -> habilita el campo de texto
      if (e.target.name === 'identifica' && e.target.value.substring(0,4) === 'Otro') {
        setIngreso_identifica(true) 
      } else {
        setIngreso_identifica(false)
        acumulador(`${e.target.name}_otro`, 'borrar')
      }
      (e.target.name === 'tac' && e.target.value.substring(0,4) === 'Otro') ? setTac_tac(true) : setTac_tac(false);
      (e.target.name === 'fijacion' && e.target.value.substring(0,4) === 'Otro') ? setCirugia_fijacion(true) : setCirugia_fijacion(false);
      (e.target.name === 'maniobras' && e.target.value.substring(0,4) === 'Otro') ? setCirugia_maniobras(true) : setCirugia_maniobras(false);
      (e.target.name === 'complicacion' && e.target.value.substring(0,4) === 'Si, ') ? setCirugia_complicacion(true) : setCirugia_complicacion(false);
      (e.target.name === 'herida' && e.target.value.substring(0,4) === 'Otro') ? setSemanas2_herida(true) : setSemanas2_herida(false);
      (e.target.name === 'perdida' && e.target.value === 'Si') ? setSemanas6_perdida(true) : setSemanas6_perdida(false);

      acumulador(e.target.name, e.target.value)

    }

  }

  useEffect(() => {
    if (semanas6_perdida) {
      setCuales('Describa perdida de la reducción')
    }
  }, [semanas6_perdida])

  const handleChangeOtro = e => {
    acumulador(e.target.name, e.target.value)
  }

  return (

    <div className={`relative bg-white py-2 px-4 rounded-b-lg mb-5 shadow w-11/12 md:w-full mx-auto  mt-0 ${primero ? 'rounded-b-lg' : 'rounded-lg'} border ${isInvalid && ' border-red-500'} `}>
      {label}

      {imagen &&
        <div className="my-2 mx-0">
          <img src={`../assets/images/${grupo}.png`} alt="TAC" />
        </div>
      } 

      {valores.map(function(object, i) {
        return (
          <div key={i}>
            <label className="inline-flex items-center mt-3">
              <input 
                type="radio" 
                name={grupo} 
                value={object.item} 
                id={object.id}
                className="form-radio h-5 w-5 text-cyan-700 focus:ring-lightBlue-200" 
                onChange={ handleChange }
              />
              <span className="ml-4 text-gray-700">{object.item}</span>
            </label>
            
            {((object.item.substring(0,4) === 'Otro' || object.item.substring(0,4) === 'Si, ' || object.item === 'Si') && 
            (ingreso_identifica || tac_tac || cirugia_fijacion || cirugia_maniobras || cirugia_complicacion || semanas2_herida || semanas6_perdida)) 
            && 
              <input 
                type="text"
                name={grupo + '_otro'} 
                value={datos}
                className="w-full my-2 border border-blue-200 py-1.5 pr-4 leading-normal rounded-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800" 
                placeholder={ cuales }
                onChange={ handleChangeOtro }
              />}

          </div>
        )
      })}

    </div>

)}

export default Radio