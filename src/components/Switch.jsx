import React, { useEffect } from 'react';

const Switch = ({label, name, isInvalid, primero, acumulador, valor}) => {

  const handleChange = e => {
    acumulador(e.target.name, e.target.checked)
  }

  return (

    <div className={`relative bg-white py-2 px-4 rounded-b-lg mb-5 shadow w-11/12 md:w-full mx-auto  mt-0 ${primero ? 'rounded-b-lg' : 'rounded-lg'} border ${isInvalid && ' border-red-500'} `}>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input 
            onChange={ handleChange }
            type="checkbox" 
            name={name} 
            checked={valor}
            value={valor}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-cyan-600 appearance-none cursor-pointer focus:outline-none hover:border-cyan-600"
          />
          <label htmlFor={name} className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"></label>
      </div>
      <label htmlFor={name} className="text-gray-700">{label}</label>

    </div>

  )

}

export default Switch