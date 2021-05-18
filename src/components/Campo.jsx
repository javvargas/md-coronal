import React from 'react'

const Campo = (props) => (

  <div className={`relative bg-white py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 ${props.primero ? 'rounded-b-lg' : 'rounded-lg'}`}>
    {props.label}

    <div className="my-2">
      <input type="text" name={props.name} className="block w-full border border-blue-200 py-1.5 pr-4 leading-normal rounded-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800" />
    </div>

  </div>

)

export default Campo