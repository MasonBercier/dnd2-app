import { setDoc, doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";


export default function ClassSelect() {
    const [allClasses, setAllClasses] = useState([]);
    const [userClass, setUserClass] = useState('')

    const navigate = useNavigate()

    // const getClasses = async () => {
    //   const response = await fetch("https://api.open5e.com/classes/")
    //   const data = await response.json()
    // }

    useEffect(() => {
      fetch("https://api.open5e.com/classes/")
      .then(response => response.json())
      .then(json => setAllClasses(json.results))
    }, [userClass]);

    const addClassToDb = () => {
      setDoc(doc(db, "users", auth.currentUser.uid, "character", 'class'), {
        class: userClass
      })
      navigate('/raceselect')
    }

  return (
  <>
    <h1 className='ClassTitle'>Choose your class</h1>
      <div className="ClassSelect">
        <div className="ClassButtons" data-columns="4">
          {allClasses.map((item, index) => {
              return (
              <div key={index}>
                <button type="button" className="nes-btn is-primary" onClick={() => setUserClass(item.name)}>{item.name}</button>
              </div>
              )
            })}
          </div>
      </div>
      <div className="AllClasses" >
          {allClasses.map((item, index) => {
             if (userClass === item.name) {
              return (
               <div key={index} className="nes-container is-dark with-title is-centered">
               <p className="title">{userClass}</p>
                {userClass === 'Barbarian' && <strong><p>A fierce warrior of primitive background who can enter a battle rage</p></strong>}
                {userClass === 'Bard' && <strong><p>An inspiring magician whose power echoes the music of creation</p></strong>}
                {userClass === 'Cleric' && <strong><p>A priestly champion who wields divine magic in service of a higher power</p></strong>}
                {userClass === 'Druid' && <strong><p>A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms</p></strong>}
                {userClass === 'Fighter' && <strong><p>A master of martial combat, skilled with a variety of weapons and armor</p></strong>}
                {userClass === 'Monk' && <strong><p>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection</p></strong>}
                {userClass === 'Paladin' && <strong><p>A holy warrior bound to a sacred oath</p></strong>}
                {userClass === 'Ranger' && <strong><p>A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization</p></strong>}
                {userClass === 'Rogue' && <strong><p>A scoundrel who uses stealth and trickery to overcome obstacles and enemies</p></strong>}
                {userClass === 'Sorcerer' && <strong><p>A spellcaster who draws on inherent magic from a gift or bloodline</p></strong>}
                {userClass === 'Warlock' && <strong><p>A wielder of magic that is derived from a bargain with an extraplanar entity</p></strong>}
                {userClass === 'Wizard' && <strong><p>A scholarly magic-user capable of manipulating the structures of reality</p></strong>}
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Hp at first level</p>
                {item.hit_dice.length > 3 ? 
                        <h3 style={{color: 'green'}}>{item.hit_dice.slice(-2)}</h3> 
                        : <h3 style={{color: 'green'}}>{item.hit_dice.slice(-1)}</h3>}
                </div>
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Skill Proficiency</p>
                  <p>{item.prof_skills}</p>
                </div>
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Starting Equipment</p>
                  <p>{item.equipment}</p>
                </div>
               </div>
              )
              } else {
                return ''
              }
           })}
        </div>
        <div className="SaveClassButton">
        <button className="nes-btn is-success" onClick={() =>  addClassToDb()}>Save Class!</button>
        </div>
  </>
  )
}
