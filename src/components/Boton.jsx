import React from 'react'
import { Link } from 'react-router-dom'

const Boton = (props) => {
  var paramBoton

  if (props.valor === 'Enviar') {
    paramBoton = { clases: 'text-cyan-100 bg-teal-500 hover:bg-teal-700', link: '' }
  } else if (props.valor === 'Atrás') {
    paramBoton = { clases: 'text-cyan-600 bg-cyan-50 hover:bg-lightBlue-100', link: '/menu' }
  } else { //solo para el menu
    paramBoton = { clases: 'text-cyan-100 bg-teal-500 hover:bg-teal-700', link: props.ubicacion }
  }

  return (

    <div>
      {paramBoton.link === '' ?
        <button 
          disabled={ props.botonActivo }
          onClick={ () => props.enviarInfo('listo') }
          type="button" 
          name="enviar"
          className={`inline-block mt-2 mb-2 px-6 py-2 text-xs font-medium leading-6 text-center uppercase transition rounded-full shadow ripple hover:shadow-lg focus:outline-none ${paramBoton.clases}`}
        > 
          {props.valor} 
        </button>
      :
        <Link to={ paramBoton.link }>
          <button 
            type="button" 
            name="atras" 
            className={`inline-block mt-2 mb-2 px-6 py-2 text-xs font-medium leading-6 text-center uppercase transition rounded-full shadow ripple hover:shadow-lg focus:outline-none ${paramBoton.clases}`}
          > 
            {props.valor} 
          </button>
        </Link>
      }
    </div>
  )

}

export default Boton