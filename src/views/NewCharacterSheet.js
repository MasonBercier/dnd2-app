import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from "../firebase";
import React, { useEffect } from 'react'
import { useState } from 'react';



export default function NewCharacterSheet() {
    const [tempClass, setTempClass] = useState('')
    const [allClasses, setAllClasses] = useState([]);
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
        setStrMod(Math.floor((stats[4]['rolls'][0] - 10) / 2))
        setDexMod(Math.floor((stats[4]['rolls'][1] - 10) / 2))
        setConMod(Math.floor((stats[4]['rolls'][2] - 10) / 2))
        setIntMod(Math.floor((stats[4]['rolls'][3] - 10) / 2))
        setWisMod(Math.floor((stats[4]['rolls'][4] - 10) / 2))
        setChaMod(Math.floor((stats[4]['rolls'][5] - 10) / 2))
        
    }
    
    useEffect(() => {
        fetch("https://api.open5e.com/classes/")
        .then(response => response.json())
        .then(json => setAllClasses(json.results))
      }, [stats.length]);

    const handleChange = (event) => {
        setTempClass(event.target.value)
    }

    const calculateMods = () => {


    }


    

  return (
    <>
    {stats.length <= 0 && 
    <div className='CharLoad'>
    <button className='nes-btn is-primary' onClick={currentStats}>Load Stats</button> 
    </div>}
    {stats.length > 0 && 
        <>
        <div className='ChracterInfo'>
        <div className="nes-field CharNameField">
            <div className="CharClass is-dark nes-container with-title is-centered ">
            <p className="title">Character Name</p>
                {stats.length > 0 ? <p>{stats[1]['characterName']}</p> : <p>no stats</p>}
            </div>
        </div>
        <div className="HitPoints" >
          {stats.length > 0 && allClasses.map((item, index) => {
            if (stats[2]['class'] === item.name) {return (
                <div key={index} className="nes-container is-dark with-title is-centered">
                    <p className="title">Health</p>
                    {item.hit_dice.length > 3 ? 
                        <h3 style={{color: 'green'}}>{item.hit_dice.slice(-2)}</h3> 
                        : <h3 style={{color: 'green'}}>{item.hit_dice.slice(-1)}</h3>}
                </div>
            )}
           })}
        </div>
        <div className="CharClass is-dark nes-container with-title is-centered ">
            <p className="title">Class</p>
             {stats.length > 0 ? <p>{stats[2]['class']}</p> : <p>no stats</p>}
        </div>
        <div className="CharRace is-dark nes-container with-title is-centered ">
            <p className="title">Race</p>
            {stats.length > 0 ? <p>{stats[3]['race']}</p> : <p>no stats</p>}
        </div>
        <div className="CharAlign is-dark nes-container with-title is-centered ">
            <p className="title">Alignment</p>
            {stats.length > 0 ? <p>{stats[0]['alignment']}</p> : <p>no stats</p>}
        </div>
    </div>
    
    <div className='CharacterWeapons'>
        <div className='weapons'>
                <div className="CharClass is-dark nes-container with-title is-centered "> 
                    {stats.length > 0 && stats[2]['class'] === 'Barbarian' && <p>Weapon: Two-Handed Axe<br></br>Ability: You can enter Rage, doubling your damage.<br></br> <h4 style={{color: 'red'}}>1-10 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Bard' && <p>Weapon: Rapier<br></br>Ability: You can sing, hypnotizing enemies and causing them to do no damage. <br></br><h4 style={{color: 'red'}}>1-8 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Cleric' && <p>Weapon: Mace<br></br>Spell: You can siphon life from enemies, damaging them and healing yourself. <br></br><h4 style={{color: 'red'}}>1-6 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Druid' && <p>Weapon: Quarterstaff<br></br>Ability: You can tap into nature and heal yourself.<br></br> <h4 style={{color: 'red'}}>1-6 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Fighter' && <p>Weapon: Greatsword<br></br>Passive: You have a 10% chance to dodge any attack. <br></br><h4 style={{color: 'red'}}>1-12 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Monk' && <p>Unarmed: Hand to Hand Combat <br></br>Passive: You attack twice each turn<br></br><h4 style={{color: 'red'}}>1-4 Damage x 2</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Paladin' && <p>Weapon: Halberd<br></br>Ability: You can use divine sense, locating enemies and ensuring you attack first in combat {chaMod} time(s) per day.<br></br><h4 style={{color: 'red'}}>1-10 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Ranger' && <p>Weapon: Shortbow<br></br>Ability: You can shoot two arrow at once {dexMod} time(s) per day.<br></br> <h4 style={{color: 'red'}}>1-6 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Rogue' && <p>Weapon: Dagger<br></br>Passive: You have a {Number(((dexMod * 3) + 15))}% chance to sneak attack before combat begins for x3 damage.<br></br><h4 style={{color: 'red'}}>1-4 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Sorcerer' && <p>Spell: Fireball<br></br> Passive: Your attacks have a 50% chance to inflict burning, dealing {Number(((chaMod + 1)))} damage each turn.<br></br> <h4 style={{color: 'red'}}>3 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Warlock' && <p>Weapon: Whip<br></br> Passive: You have a 25% chance to summon a familiar that deals {Number((chaMod + 1))} each time you defeat an enemy.<br></br> <h4 style={{color: 'red'}}>1-4 Damage</h4></p> }
                    {stats.length > 0 && stats[2]['class'] === 'Wizard' && <p>Spell: Lightning Bolt<br></br> Passive: Your attacks have a {Number(((intMod * 3) + 15))}% chance to stun. <h4 style={{color: 'red'}}>3 Damage</h4></p> }
                </div>
        </div>
    </div>
    
    <div className='row'>
        <div className='CharacterStats'>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Strength</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][0]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Dexterity</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][1]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Constitution</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][2]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Intelligence</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][3]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Wisdom</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][4]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Charisma</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][5]}</p> : <p>no stats</p>}</p>
            </div>
        </div>
        <div className='CharacterMods'>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Strength Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][0] >= 10 ? '+' : ''} {Math.floor((stats[4]['rolls'][0] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Dexterity Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][1] >= 10 ? '+' : ''} {Math.floor((stats[4]['rolls'][1] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Constitution Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][2] >= 10 ? '+' : ''} {Math.floor((stats[4]['rolls'][2] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Intelligence Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][3] >= 10 ? '+' : ''} {Math.floor((stats[4]['rolls'][3] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Wisdom Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][4] >= 10 ? '+' : ''} {Math.floor((stats[4]['rolls'][4] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Charisma Modifier</p>
                <p>{stats.length > 0 ? <p>{stats[4]['rolls'][5] >= 10 ? '+' : ''} {Math.floor((stats[4]['rolls'][5] - 10) / 2)}</p> : <p>no stats</p>}</p>
            </div>
        </div>
    </div>
    </>}
    </>
  )
}
