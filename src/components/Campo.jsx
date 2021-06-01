import React from 'react'

const Campo = ( {primero, acumulador, isInvalid, tipo, name, label, identi, valor} ) => {
  
  const handleChange = e => {
    acumulador(e.target.name, e.target.value)
  }

  return (

    <div className={`relative bg-white py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 border 
    ${primero ? 'rounded-b-lg' : 'rounded-lg'} border ${isInvalid && ' border-red-500'} `}>
      {label}

      <div className="my-2">
        <input 
          type={tipo} 
          name={name} 
          value={identi ? identi : valor}
          readOnly={identi && 'readonly'}
          className="block w-full border border-blue-200 py-1.5 px-4 leading-normal rounded-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800"
          onChange={ handleChange }  
        />
      </div>

    </div>

  )
}

export default Campo