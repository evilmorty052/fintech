import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import useMounted from '../hooks/useMounted'
import { useToast } from '@chakra-ui/react'

const Login = () => {
  const mounted = useMounted()
  
  const { signInWithGoogle, login, log } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast

// useEffect(() => {

// log()
  
// }, [])





  const handleSubmit = async () =>{
    // e.preventDefault()
      if (!email || !password) {
        toast({
          message: 'Credentials not valid.',
          type: 'warning',
          duration: 9000,
          Closable: true,
        })
        return
      }
      // your login logic here
      setIsSubmitting(true)
      login(email, password)
      
      
      // .then(
      //   <Navigate to={'/profile'}/>
      // )
        .then(res => {
          // handleRedirectToOrBack()
          // <Navigate to={'/profile'}/>
          localStorage.setItem('email',JSON.stringify(email))
      localStorage.setItem('password',JSON.stringify(password))
        })
        .catch(error => {
          console.log(error.message)
          toast({
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        })
        .finally(() => {
          // setTimeout(() => {
          //   mounted.current && setIsSubmitting(false)
          //   console.log(mounted.current)
          // }, 1000)
          
          // mounted.current && setIsSubmitting(false)
           setIsSubmitting(false)
          // handleRedirectToOrBack()
        })
    


  }

  return (
    <div>
     <h1>redirected</h1>
    </div>
  );
}

export default Login