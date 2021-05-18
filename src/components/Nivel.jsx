import React from 'react'

const Nivel = (props) => (

  <div className={`relative bg-white py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 ${props.primero ? 'rounded-b-lg' : 'rounded-lg'}`}>
    {props.label}

    <div className="flex items-center">
      <div className="flex-1 w-1/4 text-center">
        Sin Dolor
      </div>
      <div className="flex-none my-2 w-2/4">

        <div className="flex-col">
          <div className="flex justify-center text-xl font-bold text-cyan-800 mb-3">5</div>
          <div className="flex">
            <input className="rounded-xl overflow-hidden appearance-none bg-gray-300 h-6 w-full" type="range" min="0" max="10" step="1" />
          </div>
          <div className="flex flex-row justify-between mx-1">
            <div className="w-5 text-center text-xs md:text-sm">0</div>
            <div className="w-5 text-center text-xs md:text-sm">1</div>
            <div className="w-5 text-center text-xs md:text-sm">2</div>
            <div className="w-5 text-center text-xs md:text-sm">3</div>
            <div className="w-5 text-center text-xs md:text-sm">4</div>
            <div className="w-5 text-center text-xs md:text-sm">5</div>
            <div className="w-5 text-center text-xs md:text-sm">6</div>
            <div className="w-5 text-center text-xs md:text-sm">7</div>
            <div className="w-5 text-center text-xs md:text-sm">8</div>
            <div className="w-5 text-center text-xs md:text-sm">9</div>
            <div className="w-5 text-center text-xs md:text-sm">10</div>
          </div>
        </div>

      </div>
      <div className="flex-1 w-1/4 text-center">
        Peor Dolor Posible
      </div>
    </div>

  </div>

)

export default Nivel