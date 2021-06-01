import React from 'react'

import Header from '../components/Header'
import Login from '../components/Login'

const Home = ({global, setGlobal}) => (
  <div className="flex">
    <div className="flex-grow"></div>
    <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
      <Header />
      <Login global={global} setGlobal={setGlobal}/>
    </div>
    <div className="flex-grow"></div>
  </div>
)

export default Home