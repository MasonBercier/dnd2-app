import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home';
import CharacterSheet from './views/CharacterSheet';
import CreateCharacter from './views/CreateCharacter';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createcharacter' element={<CreateCharacter/>}/>
          <Route path='/charactersheet' element={<CharacterSheet/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
