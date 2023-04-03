import React from 'react'
import { AppContext } from '../context/AppContext'
import AlignmentSelect from '../components/AlignmentSelect'
import ClassSelect from '../components/ClassSelect'
import RaceSelect from '../components/RaceSelect'
import RollStats from '../components/RollStats'
import { useContext } from 'react'

export default function CreateCharacter() {
  const {setMyChar} = useContext(AppContext)
  return (
    <div>
        <h1>Choose your class</h1>
        <ClassSelect />
        <br></br>
        <h1>Choose your Race</h1>
        <RaceSelect />
        <br></br>
        <h1>Choose your Alignment</h1>
        <AlignmentSelect />
        <RollStats />

    </div>
  )
}
