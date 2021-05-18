import React from 'react'

import img31a from '../assets/images/31A.png'

const Selector = (props) => (

  <div className={`relative bg-white py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 ${props.primero ? 'rounded-b-lg' : 'rounded-lg'}`}>
    {props.label}

    <div className="my-2 mx-0">
      <img src={img31a} alt="31A" />
    </div>
      
    <select className="block w-full border border-blue-200 py-1.5 pr-4 mb-2 leading-normal rounded-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-cyan-800">
      <option value=''>Elige</option>
      <option>31A1.1</option>
      <option>31A1.2</option>
      <option>31A1.3</option>
      <option>31A2.2</option>
      <option>31A2.3</option>
      <option>31A3.1</option>
      <option>31A3.2</option>
      <option>31A3.3</option>
    </select>

  </div>

)

export default Selector