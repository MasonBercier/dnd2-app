import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from "../firebase";
import React, { useEffect } from 'react'
import { useState } from 'react';



export default function NewCharacterSheet() {

    const [rolls, setRolls] = useState([])
    const [stats, setStats] = useState([])

    const currentStats = async () => {
        const statArr = []
        const subColRef = collection(db, "users", auth.currentUser.uid, "character")
        onSnapshot(subColRef, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                statArr.push(doc.data())
            })
            setStats(stats.concat(statArr))
            console.log(stats)
        })
}

    // useEffect(() => {
    //     setStats()
    // }, [])

  return (
    <>
    <button onClick={currentStats}>Load Stats</button> 
    <div className='ChracterInfo'>
        <div className="nes-field CharNameField">
            <label for="name_field">Character name</label>
            <input type="text" id="name_field" className="nes-input" />
        </div>
        <div className="CharClass is-dark nes-container with-title is-centered ">
            <p class="title">Class</p>
             {stats.length > 0 ? <p>{stats[1]['class']}</p> : <p>no stats</p>}
        </div>
        <div className="CharRace is-dark nes-container with-title is-centered ">
            <p class="title">Race</p>
            {stats.length > 0 ? <p>{stats[2]['race']}</p> : <p>no stats</p>}
        </div>
        <div className="CharAlign is-dark nes-container with-title is-centered ">
            <p class="title">Alignment</p>
            {stats.length > 0 ? <p>{stats[0]['alignment']}</p> : <p>no stats</p>}
        </div>
    </div>
    <div className='row'>
        <div className='CharacterStats'>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Strength</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][0]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Dexterity</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][1]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Constitution</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][2]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Intelligence</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][3]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Wisdom</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][4]}</p> : <p>no stats</p>}</p>
                <div className='nes-container is-dark is-centered'>
                    <p>
                    </p></div>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Charisma</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][4]}</p> : <p>no stats</p>}</p>
            </div>
        </div>
        <div className='CharacterSkills'>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Acrobatics</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AnimProf nes-checkbox is-dark"/>
                <span>Animal Handling</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="ArcaProf nes-checkbox is-dark"/>
                <span>Arcane</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Athletics</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Deception</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>History</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Insight</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Intimidation</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Investigation</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Medicine</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Nature</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Perception</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Performance</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Persuasion</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Religion</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Sleight of Hand</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Stealth</span>
            </label>
            </div>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Survival</span>
            </label>
            </div>
        </div>
    </div>
    </>
  )
}
