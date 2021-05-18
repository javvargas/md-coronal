import React from 'react'
import { connect } from 'react-redux'

const Header = props => {
  const { titulo } = props
  return(
    <div className="bg-gradient-to-t from-cyan-600 to-cyan-700 md:rounded-b-lg rounded-none shadow-md mb-4">
      <div className="text-white text-lg font-semibold text-center p-5 md:p-7 tracking-wider leading-none capitalize header__titulo">
        {titulo}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    titulo: state.textos.titulo
  }
}

export default connect(mapStateToProps, null)(Header)