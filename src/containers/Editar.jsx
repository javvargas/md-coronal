import React, { useState, useEffect, Fragment } from 'react'
import { apiCrearUsuario, apiUsuarios, cargando, cerrarSwal } from '../utils/utils' 
import { useHistory, useParams } from 'react-router-dom'
import { scroller } from 'react-scroll'
import bcrypt from 'bcryptjs'

import Header from '../components/Header'
import Titulo from '../components/Titulo'
import Campo from '../components/Campo'
import Radio from '../components/Radio'
import Switch from '../components/Switch'
import Botonera from './Botonera'
import cargandoEdita from '../assets/images/puff.svg'

const Editar = ({global}) => {
  let history = useHistory();
  const datosGenero = [{id: 1, item: 'Mujer'}, {id: 2, item: 'Hombre'}]
  const [validador, setValidador] = useState([])
  const [botonActivo, setbotonActivo] = useState('')
  const initialState = {id: '', usuario: '', nombre: '', password: '', genero: '', admin: false, activo: true}
  const [usuario, setUsuario] = useState(initialState)
  const { id } = useParams()
  let tituloEditar = 'Crear usuario'

  if (id !== undefined) {
    tituloEditar = 'Editar usuario'
    useEffect(() => {
      apiUsuarios(id, global.token)
      .then( resultado => {
        let resActivo, resAdmin
        if (resultado.admin === 0) { resAdmin = false } else { resAdmin = true}
        if (resultado.activo === 0) { resActivo = false } else { resActivo = true}
        setUsuario({ ...usuario, id: resultado.id, usuario: resultado.usuario, nombre: resultado.nombre, genero: resultado.genero, admin: resAdmin, activo: resActivo})
      })
    }, [])
  }

  const almacenar = (nombre, valor) =>{
    if (nombre === 'password') { valor = bcrypt.hashSync(valor, bcrypt.genSaltSync(10)) }
    setUsuario({
      ...usuario, [nombre]: valor
    })
  }

  useEffect(() => {
    (validador.length > 0) && recarga()
  }, [usuario])

  const recarga = () => {
    const propiedades = Object.keys(usuario)
    const resultados = Object.values(usuario)

    const validar = []
    resultados.forEach((e, i) => {
      if (propiedades[i] !== 'id') {
        (e === '') && validar.push(propiedades[i])
      }
    })
    setValidador(validar)
    return validar
  }

  const crearUsuario = () => {
    const validar = recarga()
    if (validar.length === 0) {
      setbotonActivo('disabled')
      cargando()
      apiCrearUsuario(usuario, global.token)
      .then(() => {
        setUsuario({ ...initialState })
        cerrarSwal()
        history.push('/admin')
      })    
    } else { //si hay errores de validacion, muestra el campo a arreglar
      scroller.scrollTo(validar[0], {duration: 1000, smooth: true, offset: -150 })
    }
  }

  let validadorUsuario, validadorNombre, validadorPassword, validadorGenero = false

  validadorUsuario = (validador.includes('usuario'))
  validadorNombre = (validador.includes('nombre'))
  validadorPassword = (validador.includes('password'))
  validadorGenero = (validador.includes('genero'))

  return (
    <div className="flex">
      <div className="flex-grow"></div>
      <div className="flex-none flex-shrink w-screen md:w-auto ancho-fijo">
        <Header />

        {(id && !usuario.id) ?
          <div className='w-16 h-16 flex mx-auto my-10 text-center'>
            <img src={cargandoEdita} alt="Cargando" className='w-screen' />
          </div>
        :
          <Fragment>
            <Titulo titulo={tituloEditar} />

            <Campo name='usuario' valor={usuario.usuario} label='Usuario' acumulador={almacenar} isInvalid={validadorUsuario} primero />
            <Campo name='nombre' valor={usuario.nombre} label='Nombre' acumulador={almacenar} isInvalid={validadorNombre} />
            <Campo name='password' tipo='password' label='Password' isInvalid={validadorPassword} acumulador={almacenar} />
            <Radio valores={datosGenero} valor={usuario.genero} label="Genero" grupo="genero" isInvalid={validadorGenero} acumulador={almacenar} />
            
            {(global.responsable.admin === 1) && 
              <Fragment>
                <Switch name='admin' valor={usuario.admin} label="Administrador" acumulador={almacenar} />
                <Switch name='activo' valor={usuario.activo} label="Activo" acumulador={almacenar} />
              </Fragment>
            }
            
            <Botonera titulo1="Guardar" botonActivo={ botonActivo } titulo2="Cancelar" ubicacion='admin' enviarInfo={crearUsuario} doble />
          </Fragment>
        }

      </div>
      <div className="flex-grow"></div>
    </div>
  )
}

export default Editar