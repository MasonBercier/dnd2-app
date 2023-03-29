import React from 'react'
import AlignmentSelect from '../components/AlignmentSelect'
import ClassSelect from '../components/ClassSelect'
import RaceSelect from '../components/RaceSelect'
import RollStats from '../components/RollStats'

export default function CreateCharacter() {
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
