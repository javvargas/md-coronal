import React, { Fragment } from 'react'

const Busqueda = ( { buscar, datobusca, nombrePaciente } ) => {
  
  const handleChange = e => {
    datobusca(e.target.value)
  }
  
  return (

    <div className={`relative bg-white py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 border rounded-lg`}>
      Ingrese la identificación del paciente

      <div className="relative my-2">
        <input 
          onChange={ handleChange }
          type="number" 
          name='Buscar'
          className="h-10 w-full block border border-blue-200 px-4 leading-normal rounded-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800" 
          placeholder="Identificación" 
        />
        <div className="absolute top-0 right-1">
          <button 
            onClick={ buscar }
            className="inline-block mt-1 mb-1 px-6 py-2 text-xs font-medium leading-4 text-center uppercase transition rounded-lg shadow ripple hover:shadow-lg focus:outline-none text-cyan-100 bg-teal-500 hover:bg-teal-700"
          >
            Buscar
          </button> 
        </div>
      </div>

      {(nombrePaciente === 'Nuevo Paciente') ?
        <Fragment>
          <p className='font-semibold text-xl text-gray-600 pb-0'>{nombrePaciente}</p>
        </Fragment>
      :
        (nombrePaciente) ?
        <Fragment>
          <p className='font-semibold text-xl text-gray-600 pb-0'>{nombrePaciente}</p>
          <p className='text-gray-400 text-xs pt-0'> Nombre del paciente </p>
        </Fragment>
      :
        <Fragment />
      }

    </div>

  )
}

export default Busqueda