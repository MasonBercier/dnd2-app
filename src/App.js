import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home';
import CreateCharacter from './views/CreateCharacter';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import ClassSelect from './components/ClassSelect';
import RaceSelect from './components/RaceSelect';
import AlignmentSelect from './components/AlignmentSelect';
import NewCharacterSheet from './views/NewCharacterSheet';
import RollStats from './components/RollStats';
import Combat from './views/Combat';
import NameSelect from './components/NameSelect';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createcharacter' element={<CreateCharacter/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/classselect' element={<ClassSelect/>}/>
          <Route path='/raceselect' element={<RaceSelect/>}/>
          <Route path='/alignmentselect' element={<AlignmentSelect/>}/>
          <Route path='/rollstats' element={<RollStats/>}/>
          <Route path='/nameselect' element={<NameSelect/>}/>
          <Route path='/newcharactersheet' element={<NewCharacterSheet/>}/>
          <Route path='/combat' element={<Combat/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
