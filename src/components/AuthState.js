import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export default function AuthState() {
    const [authUser, setAuthUser] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                console.log(authUser)
                
            } else {
                setAuthUser('')
                console.log('not signed in')
            }
        })
    }, [authUser])

    const userSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('signed out')
            navigate('/')
          }).catch((error) => {
            // An error happened.
            console.log(error.message)
          });
    }

  return (
    <>
        { authUser ? 
        <>
        <div className='nav-item'>
          <li>Hello, {authUser.displayName} !</li>
        </div>
        <div className='nav-item'>
          <Button style={{ float : "right" }} variant="outlined" color="error" onClick={userSignOut}>Sign Out
          </Button>
        </div>
        </> :  <li>Signed Out</li>}
    </>
  )
}