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
        <br></br>
        <ClassSelect />
        <br></br>
        <RaceSelect />
        <br></br>
        <AlignmentSelect />
        <RollStats />

    </div>
  )
}
