import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const Profile = () => {
  const {auth,logout} = useContext(UserContext)
  return (
    <div className='formContainer'>
      <h1>Tu perfil</h1>
      {`Usuario: ${auth.user}`}
      <button className='buttonNavbar' onClick={()=>logout()}>
              <div className='containerLogout'>🔒 Logout</div>
            </button>
    </div>
  )
}

export default Profile