import { setDoc, doc, collection, onSnapshot } from "firebase/firestore";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";


export default function NameSelect() {
    const [myMods, setMyMods] = useState([])
    const [characterName, setCharacterName] = useState();
    const [stats, setStats] = useState([])


    const navigate = useNavigate()

    const currentStats = async () => {
      const statArr = []
      const modArr = []
      const subColRef = collection(db, "users", auth.currentUser.uid, "character")
      onSnapshot(subColRef, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
              statArr.push(doc.data())
          })
          setStats(stats.concat(statArr))
          console.log(stats)
      })
    };

    const handleChange = (event) => {
        setCharacterName(event.target.value);
        (console.log(characterName))
    }

    const addCharacterNameToDb = () => {
        setDoc(doc(db, "users", auth.currentUser.uid, "character", "characterName"), {
            characterName: characterName
        })
        navigate('/newcharactersheet')
    }
  return (
    <>
    {stats.length <= 0 && 
    <div className='CharLoad'>
    <button className='nes-btn is-primary' onClick={currentStats}>Load Stats</button> 
    </div>}
    {stats.length > 0 && 
    <div className='PreviewInfo'>
        <div className="nes-field CharNameField">
        <div className='row'>
            <div className="CharClass is-dark nes-container with-title is-centered ">
              <p className="title">Character Name</p>
              <div className="nes-field">
                <label for="name_field">Your character's name:</label>
                <input type="text" id="name_field" className="nes-input is-dark is-centered" onChange={handleChange}/>
                <button className="nes-btn is-success" onClick={addCharacterNameToDb}>Save Character Name!</button>
              </div>
            </div>
        
        <div className="CharClass is-dark nes-container with-title is-centered ">
              <p className="title">Class</p>
              {stats.length > 0 ? <p>{stats[1]['class']}</p> : <p>no stats</p>}
        </div>
        <div className="CharRace is-dark nes-container with-title is-centered ">
            <p className="title">Race</p>
            {stats.length > 0 ? <p>{stats[2]['race']}</p> : <p>no stats</p>}
        </div>
        <div className="CharAlign is-dark nes-container with-title is-centered ">
            <p className="title">Alignment</p>
            {stats.length > 0 ? <p>{stats[0]['alignment']}</p> : <p>no stats</p>}
        </div>
        
          <div className='PreviewStats'>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Strength</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][0]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Dexterity</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][1]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Constitution</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][2]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Intelligence</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][3]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Wisdom</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][4]}</p> : <p>no stats</p>}</p>
            </div>
            <div className='nes-container is-dark with-title is-centered'>
                <p className="title">Charisma</p>
                <p>{stats.length > 0 ? <p>{stats[3]['rolls'][5]}</p> : <p>no stats</p>}</p>
            </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}
