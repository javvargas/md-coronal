import React from 'react'

const Texto = (props) => (

  <div className={`whitespace-pre-wrap relative bg-white text-gray-600 py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 break-normal ${props.primero ? 'rounded-b-lg' : 'rounded-lg'} ${props.clases && 'font-semibold text-lg '}`}>

    {props.texto}

  </div>

)

export default Texto