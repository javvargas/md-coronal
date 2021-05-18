import React from 'react'

const Radio = ({ valores, grupo, seleccion, label, primero, imagen, name }) => {
  
  return (

    <div className={`relative bg-white py-2 px-4 rounded-b-lg mb-5 shadow w-11/12 md:w-full mx-auto  mt-0 ${primero ? 'rounded-b-lg' : 'rounded-lg'}`}>
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
                className="form-radio h-5 w-5 text-cyan-700 focus:ring-lightBlue-200" 
                onChange={ () => seleccion(object.id) }
              />
              <span className="ml-4 text-gray-700">{object.item}</span>
            </label>
            {(object.item.substring(0,4) === 'Otro') && 
              <input 
                type="text"
                name={name} 
                className="w-full my-2 border border-blue-200 py-1.5 pr-4 leading-normal rounded-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800" 
                placeholder="¿Cuál?" 
              />}
          </div>
        )
      })}

    </div>

)}

export default Radio