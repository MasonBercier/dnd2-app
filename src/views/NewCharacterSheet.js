import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from "../firebase";
import React, { useEffect } from 'react'
import { useState } from 'react';



export default function NewCharacterSheet() {
    const [tempClass, setTempClass] = useState('')
    const [allClasses, setAllClasses] = useState([]);
    const [rolls, setRolls] = useState([])
    const [stats, setStats] = useState([])
    const [strMod, setStrMod] = useState()
    const [dexMod, setDexMod] = useState()
    const [conMod, setConMod] = useState()
    const [intMod, setIntMod] = useState()
    const [wisMod, setWisMod] = useState()
    const [chaMod, setChaMod] = useState()
    

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
        setStrMod(Math.floor((stats[3]['rolls'][0] - 10) / 2))
        setDexMod(Math.floor((stats[3]['rolls'][1] - 10) / 2))
        setConMod(Math.floor((stats[3]['rolls'][2] - 10) / 2))
        setIntMod(Math.floor((stats[3]['rolls'][3] - 10) / 2))
        setWisMod(Math.floor((stats[3]['rolls'][4] - 10) / 2))
        setChaMod(Math.floor((stats[3]['rolls'][5] - 10) / 2))
    }
    useEffect(() => {
        fetch("https://api.open5e.com/classes/")
        .then(response => response.json())
        .then(json => setAllClasses(json.results))
      }, [stats.length]);

      const handleChange = (event) => {
        setTempClass(event.target.value)
    }


    

  return (
    <>
    <button onClick={currentStats}>Load Stats</button> 
    <div className='ChracterInfo'>
        <div className="nes-field CharNameField">
            <div className="CharClass is-dark nes-container with-title is-centered ">
            <p class="title">Character Name</p>
            {stats.length > 0 ? <p>{stats[1]['name']}</p> : <p>no stats</p>}
            </div>
        </div>
        <div className="HitPoints" >
          {stats.length > 0 && allClasses.map((item, index) => {
             if (stats[1]['class'] === item.name) {return (
                <div key={index} className="nes-container is-dark with-title is-centered">
                <p className="title">Health</p>
                 <h3 style={{color: 'green'}}>{item.hit_dice}</h3>
                </div>)}})}
        </div>
        <div className="CharClass is-dark nes-container with-title is-centered ">
            <select required id="tempclass_select" onChange={handleChange}>
                <option value="Barbarian">Barbarian</option>
                <option value="Bard">Bard</option>
                <option value="Cleric">Cleric</option>
                <option value="Druid">Druid</option>
                <option value="Fighter">Fighter</option>
                <option value="Monk">Monk</option>
                <option value="Paladin">Paladin</option>
                <option value="Ranger">Ranger</option>
                <option value="Rogue">Rogue</option> 
                <option value="Sorcerer">Sorcerer</option>
                <option value="Warlock">Warlock</option>
                <option value="Wizard">Wizard</option>
            </select>
            {/* <p class="title">Class</p>
             {stats.length > 0 ? <p>{stats[1]['class']}</p> : <p>no stats</p>} */}
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
    <div className='CharacterWeapons'>
            <div className='weapons'>
                    <div className="CharClass is-dark nes-container with-title is-centered "> 
                        {stats.length > 0 && tempClass === 'Barbarian' && <p>Weapon: Two-Handed Axe<br></br>Ability: You can enter Rage, doubling Strength for two turns {strMod} time(s) per day.<br></br> <h4 style={{color: 'red'}}>1-10 Damage</h4></p> }
                        {stats.length > 0 && tempClass === 'Bard' && <p>Weapon: Rapier<br></br>Ability: You can sing, hypnotizing enemies and causing them to miss {chaMod} time(s) per day. <br></br><h4 style={{color: 'red'}}>1-8 Damage</h4></p> }
                        {stats.length > 0 && tempClass === 'Cleric' && <p>Weapon: Mace<br></br>Spell: You can siphon life from enemies {wisMod} time(s) per day. <br></br><h4 style={{color: 'red'}}>1-6 Damage</h4></p> }
                        {stats.length > 0 && tempClass === 'Druid' && <p>Weapon: Quarterstaff<br></br>Ability: You can tap into nature and heal yourself {wisMod} time(s)<br></br> <h4 style={{color: 'red'}}>1-6 Damage</h4></p> }
                        {stats.length > 0 && tempClass === 'Fighter' && <p>Not Sure<br></br> <h4 style={{color: 'red'}}>1Not Sure</h4></p> }
                        {stats.length > 0 && tempClass === 'Monk' && <p>Unarmed: Hand to Hand Combat <br></br>Passive: Can attack twice each turn<br></br><h4 style={{color: 'red'}}>1-4 Damage x 2</h4></p> }
                        {stats.length > 0 && tempClass === 'Paladin' && <p>Weapon: Halberd<br></br>Ability: Can use divine sense, locating enemies and ensuring you go first in combat {chaMod} time(s) per day.<br></br><h4 style={{color: 'red'}}>1-10 Damage</h4></p> }
                        {stats.length > 0 && tempClass === 'Ranger' && <p>Weapon: Shortbow<br></br>Can shoot two arrow at once {dexMod} time(s) per day.<br></br> <h4 style={{color: 'red'}}>1-6 Damage</h4></p> }
                        {stats.length > 0 && tempClass === 'Rogue' && <p>Weapon: Dagger<br></br><h4 style={{color: 'red'}}>1-4 Damage</h4></p> }
                        {stats.length > 0 && tempClass === 'Sorcerer' && <p>Not Sure<br></br> <h4 style={{color: 'red'}}>1Not Sure</h4></p> }
                        {stats.length > 0 && tempClass === 'Warlock' && <p>Not Sure<br></br> <h4 style={{color: 'red'}}>1Not Sure</h4></p> }
                        {stats.length > 0 && tempClass === 'Wizard' && <p>Not Sure<br></br> <h4 style={{color: 'red'}}>1Not Sure</h4></p> }
                    </div>
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
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Charisma</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5]}</p> : <p>no stats</p>}</p>
            </div>
        </div>
        <div className='CharacterMods'>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Strength Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5] >= 10 ? '+' : ''} {Math.floor((stats[3]['rolls'][0] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Dexterity Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5] >= 10 ? '+' : ''} {Math.floor((stats[3]['rolls'][1] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Constitution Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5] >= 10 ? '+' : ''} {Math.floor((stats[3]['rolls'][2] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Intelligence Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5] >= 10 ? '+' : ''} {Math.floor((stats[3]['rolls'][3] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Wisdom Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5] >= 10 ? '+' : ''} {Math.floor((stats[3]['rolls'][4] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p class="title">Charisma Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5] >= 10 ? '+' : ''} {Math.floor((stats[3]['rolls'][5] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
        </div>
        {/* <div className='CharacterSkills'>
            <div className='checkbox'>
            <label>
                <input type="checkbox" className="AcroProf nes-checkbox is-dark"/>
                <span>Acrobatics</span>
            </label>
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
        </div>*/}
        
    </div>
    </>
  )
}
