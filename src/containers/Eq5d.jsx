import React from 'react'

import Titulo from '../components/Titulo'
import Radio from '../components/Radio'
import Texto from '../components/Texto'

const Eq5d = ({validador, acumulador}) => {
  const datosMovilidad = [{id: 1, item: 'No tengo problemas para caminar'}, {id: 2, item: 'Tengo algunos problemas para caminar'}, {id: 3, item: 'Tengo que estar en la cama'}]
  const datosCuidado = [{id: 1, item: 'No tengo problemas con el cuidado personal'}, {id: 2, item: 'Tengo algunos problemas para lavarme o vestirme'}, {id: 3, item: 'Soy incapaz de lavarme o vestirme'}]
  const datosActividades = [{id: 1, item: 'No tengo problemas para realizar mis actividades cotidianas'}, {id: 2, item: 'Tengo algunos problemas para realizar mis actividades cotidianas'}, {id: 3, item: 'Soy incapaz de realizar mis actividades cotidianas'}]
  const datosDolor = [{id: 1, item: 'No tengo dolor ni malestar'}, {id: 2, item: 'Tengo moderado dolor o malestar'}, {id: 3, item: 'Tengo mucho dolor o malestar'}]
  const datosAnsiedad = [{id: 1, item: 'No estoy ansioso ni deprimido'}, {id: 2, item: 'Estoy moderadamente ansioso o deprimido'}, {id: 3, item: 'Estoy muy ansioso o deprimido'}]

  let validadorMovilidad,validadorCuidado, validadorActividades, validadorDolor, validadorAnsiedad = false

  validadorMovilidad = (validador.includes('movilidad'))
  validadorCuidado = (validador.includes('cuidado'))
  validadorActividades = (validador.includes('actividades'))
  validadorDolor = (validador.includes('dolor'))
  validadorAnsiedad = (validador.includes('ansiedad'))

  return (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Titulo titulo="EQ5D"/>
        <Texto texto='Señale el cuadro correspondiente de cada grupo, la respuesta que mejor describa su estado de salud en el día de hoy.' primero />
        <Radio valores={datosMovilidad} label="Movilidad" grupo="movilidad" acumulador={ acumulador } isInvalid={validadorMovilidad} />
        <Radio valores={datosCuidado} label="Cuidado Personal" grupo="cuidado" acumulador={ acumulador } isInvalid={validadorCuidado} />
        <Radio valores={datosActividades} label="Actividades cotidianas (ejemplo: trabajar, estudiar, hacer las tareas domésticas, actividades familiares o actividades de recreación)" grupo="actividades" acumulador={ acumulador } isInvalid={validadorActividades} />
        <Radio valores={datosDolor} label="Dolor/Malestar" grupo="dolor" acumulador={ acumulador } isInvalid={validadorDolor} />
        <Radio valores={datosAnsiedad} label="Ansiedad/Depresión" grupo="ansiedad" acumulador={ acumulador } isInvalid={validadorAnsiedad} />

      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Eq5d