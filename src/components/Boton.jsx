import React from 'react'
import { Link } from 'react-router-dom'

const Boton = (props) => {

  return (

    <div>
      {props.valor === "Atrás" ? 
        <Link to='/menu'>
          <button 
            type="submit" 
            name="atras" 
            className="inline-block mt-2 mb-2 px-6 py-2 text-xs font-medium leading-6 text-center text-cyan-600 uppercase transition bg-cyan-50 rounded-full shadow ripple hover:shadow-lg hover:bg-lightBlue-100 focus:outline-none"
          > 
            {props.valor} 
          </button>
        </Link>
      :
        <Link to={`/${props.ubicacion}`}>
          <button 
            type="submit" 
            name="enviar" 
            className="inline-block mt-2 mb-2 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-teal-500 rounded-full shadow ripple hover:shadow-lg hover:bg-teal-700 focus:outline-none"
          >
            {props.valor} 
          </button> 
        </Link>
      }
    </div>
  )

}

export default Boton