import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home';
import CharacterSheet from './views/CharacterSheet';
import CreateCharacter from './views/CreateCharacter';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import NewClassSelect from './components/NewClassSelect';
import RaceSelect from './components/RaceSelect';
import AlignmentSelect from './components/AlignmentSelect';

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
          <Route path='/newclassselect' element={<NewClassSelect/>}/>
          <Route path='/raceselect' element={<RaceSelect/>}/>
          <Route path='/alignmentselect' element={<AlignmentSelect/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
