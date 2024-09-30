import { createContext, useState} from "react"

const urlBase = 'http://localhost:5000/api/'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [auth,setAuth] = useState({user:'falsoUser',token:true})

  const logout = () => {
    setAuth({user:null,token:false})
  }

  const validarLogin = async(email,password) => {
    const response = await fetch(urlBase + 'auth/login',{
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({email,password})
    })

    const data = await response.json()
    data.token ? (
      setAuth({user:data.email,token:data.token})
    ) : (
      alert(data.error)
    )
    return data
  }

  const register = async(email,password) => {
    const response = await fetch(urlBase + 'auth/register',{
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({email,password})
    })

    const data = await response.json()
    data.error ? (
      alert(data.error)
    ) : (
      setAuth({user:data.email,token:data.token})
    )
    return data
  }

  const getUser = async(token) =>{
    const response = await fetch(urlBase + 'auth/me',{
      method : 'GET',
      headers : {
        'Content-type' : 'application/json',
        'Authorization' : 'Bearer ' + token
      }
    })
    
    const data = await response.json()
    return data
  }

  return (
    <UserContext.Provider value={{auth,logout,validarLogin,register,getUser}}>
      {children}
    </UserContext.Provider>
  )
}