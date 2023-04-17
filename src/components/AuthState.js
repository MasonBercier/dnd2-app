import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


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

    const titleCase = (str) => {
      str = str.toLowerCase()
               .split(' ')
               .map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());

        })
    };

  return (
    <>
      { authUser 
        ? 
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/createcharacter">Create Character</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/newcharactersheet">New Character Sheet</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/combat">Combat</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/combat">Hello, {authUser.displayName}!</Link>
          </li>
          <li>
            <button className="nes-btn is-error" onClick={userSignOut}>Sign Out
            </button>
          </li>
        </> 
        :  
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Register</Link>
          </li>
        </> }
    </>
  )
}