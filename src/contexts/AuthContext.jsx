import React, { createContext, useContext, useEffect, useState, useReducer, useRef } from 'react'
import { auth } from '../utils/init-firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from 'firebase/auth'

const AuthContext = createContext({
  
  token: false,
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [token, settoken] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  
  
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  
  



  useEffect(() => {
    // console.log('The user is', currentUser)
  }, [currentUser])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  let initialvalue = false

  function reducer (state, action){
    switch (action.type) {
      case 'logout':
        return (
          state = false
        )
        
        break;
      case 'login':
        return (
          state = true
        )
        
        break;
    
      default:
        break;
    }
    }



const [state, dispatch] = useReducer(reducer,initialvalue, )
let user = state
const set = localStorage.setItem('user', JSON.stringify('false'))
let stat = localStorage.getItem('user')
let status = JSON.parse(stat)

const log = ()=>{

  if(!status){

    dispatch({type: 'login'})
  }
  
  else{dispatch({type: 'logout'})}

}

useEffect(() => {
  console.log(user)
  log()


  
}, [])



const lot = ()=>{
return(
  dispatch('logout')
)
}

// useEffect(() => {


//   if(!user){
//    log()
//    console.log('there is a user')
//   }

//   else if (!user){
//     console.log('there is no user')
//     return
//   }

  
// }, [user])







  const value = {
    state,
    reducer,
    user,
    log,
    lot,
    token,
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
