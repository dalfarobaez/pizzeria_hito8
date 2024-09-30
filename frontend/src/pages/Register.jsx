import React, { useContext } from 'react'
import { useState } from "react";
import { UserContext } from '../context/UserContext';

const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [validatepass,setValidatepass] = useState('')
  const {auth,register} = useContext(UserContext)

  
  const validarDatos = (e) => {
    e.preventDefault()
    if(email==='') {
      alert('Email no puede estar vacío')
    } else if (password==='') {
      alert('Password no puede estar vacío')
    } else if (password.length < 6) {
      alert('Password debe tener al menos 6 caracteres')
    } else if (password != validatepass) {
      alert('Contraseñas deben ser iguales')
    } else {
      register(email,password)
    }
  }
  return (
    <div className='formContainer'>
      <h2>Register</h2>
      <form className="formulario" onSubmit={validarDatos}>
        <div className='elementFormContainer'>
          <div className='nombreCampo'>Email: </div>
          <div className='campo'><input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/></div>
        </div>
        <div className='elementFormContainer'>
          <div className='nombreCampo'>Password: </div>
          <div className='campo'><input type="password" name="password"  onChange={(e) => setPassword(e.target.value)}/></div>
        </div>
        <div className='elementFormContainer'>
          <div className='nombreCampo'>Confirm Password: </div>
          <div className='campo'><input type="password" name="validatepass"  onChange={(e) => setValidatepass(e.target.value)}/></div>
        </div>
        <div className='enviarContainer'>
          <button type='submit' className='botonEnviar'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Register