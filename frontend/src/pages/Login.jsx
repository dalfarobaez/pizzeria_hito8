import React from 'react'
import { useState,useContext } from "react"
import { UserContext } from '../context/UserContext'

const Login = () => {
  const {auth,validarLogin} = useContext(UserContext)

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email==='') {
      alert('Email no puede estar vacío')
    } else if (password==='') {
      alert('Password no puede estar vacío')
    } else if (password.length < 6) {
      alert('Password debe tener al menos 6 caracteres')
    } else {
      validarLogin(email,password)
    }
  }
  return (
    <div className='formContainer'>
      <h2>Login</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className='elementFormContainer'>
          <div className='nombreCampo'>Email: </div>
          <div className='campo'><input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/></div>
        </div>
        <div className='elementFormContainer'>
          <div className='nombreCampo'>Password: </div>
          <div className='campo'><input type="password" name="password"  onChange={(e) => setPassword(e.target.value)}/></div>
        </div>
        <div className='enviarContainer'>
          <button type='submit' className='botonEnviar'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Login