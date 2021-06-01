import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'

const Descarga = ({primero}) => {

  return(
    <div className={`relative bg-white py-2 px-4 mb-4 shadow w-11/12 md:w-full mx-auto mt-0 border 
    ${primero ? 'rounded-b-lg' : 'rounded-lg'}`}> 

      <div className='flex justify-between items-center'>

        <div> 
          Reporte en Excel
        </div>

        <div>
          <a href='http://md-coronal-api/reporte?pass=2%7CCM8YIDGUCJLO1M9FvHSARlNXBxrkLOzjZlak2wn2' target='_blank'>
            <button className="inline-block px-3 py-2 text-xs font-medium  text-center transition rounded-lg shadow ripple hover:shadow-lg focus:outline-none text-cyan-100 bg-teal-500 hover:bg-teal-700">
              <FontAwesomeIcon icon={faFileExcel} className="text-green-200 text-xl pointer-events-none group-hover:text-cyan-600 sm:block" />
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Descarga