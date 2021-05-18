import React from 'react'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Botonera from './Botonera'
import Radio from '../components/Radio'
import Radiografia from '../containers/Radiografia'

const Cirugia = () => {
  const datosIntraoperatoria = [{id: 1, item: 'Si'}, {id: 2, item: 'No'}]
  const datosFijacion = [{id: 1, item: 'Clavo cefalomedular uniaxial'}, {id: 2, item: 'Clavo cefalomedular biaxial'}, {id: 3, item: 'DHS-Clavo/Placa'}, {id: 4, item: 'Placa anatomica femur proximal'}, {id: 5, item: 'Otros:'}]
  const datosManiobras = [{id: 1, item: 'Pinzas'}, {id: 2, item: 'Cerclaje'}, {id: 3, item: 'Osteosintesis con tornillo'}, {id: 4, item: 'Gancho de Lambotte en el macizo trocanterico'}, {id: 5, item: 'Ajuste en el punto de entrada'}, {id: 6, item: 'Osteosintesis al trocanter mayor'}, {id: 7, item: 'No'}, {id: 8, item: 'Otros:'}]
  const datosComplicacion = [{id: 1, item: 'No'}, {id: 2, item: 'Si, explique'}, {id: 3, item: 'Otros:'}]

  return (
    <div className="flex ">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />
        <Titulo titulo="Datos de Cirugia"/>
        <Radio valores={datosIntraoperatoria} label="Identificacion intraoperatoria del trazo coronal" grupo="intraoperatoria" primero />
        <Radio valores={datosFijacion} label="Método de fijación" grupo="fijacion" />
        <Radio valores={datosManiobras} label="Maniobras adicionales" grupo="maniobras" />
        <Radio valores={datosComplicacion} label="Complicación intraoperatoria" grupo="complicacion" />

        <Radiografia />

        <Botonera titulo1="Enviar" titulo2="Atrás" doble={true} />
      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Cirugia