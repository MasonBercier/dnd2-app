import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../context/AppContext'
import {doc, setDoc} from "firebase/firestore"
import { db } from '../firebase'


export default function ClassSelect(props) {
  const {setMyChar} = useContext(AppContext)
  const [userClass, setUserClass] = useState('')
  const [allClasses, setAllClasses] = useState([]);
  //     ^ogState
  
    useEffect(() => {
        fetch("https://api.open5e.com/classes/")
        .then(response => response.json())
        .then(json => setAllClasses(json.results))
        console.log(allClasses)
    }, [userClass]);
  // runs when userClass changes
  // [] only runs on mount
  
  return (
      <>
      <h1 className='ClassTitle'>Choose your class</h1>
        <div className="ClassSelect">
          <div className="ClassButtons" data-columns="4">
            {allClasses.map((item, index) => {
                return (
                <div key={index}>
                  <button type="button" class="nes-btn is-primary" onClick={() => setUserClass(item.name)}>{item.name}</button>
                </div>
                )
              })}
            </div>
        </div>
        <div className="AllClasses" >
          {allClasses.map((item, index) => {
             if (userClass === item.name) {
              return (
               <div key={index} class="nes-container is-dark with-title is-centered">
               <p class="title">{userClass}</p>
                <h3>Hit Dice: {item.hit_dice}</h3>
                <p>{item.desc}</p>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Hp at first level</p>
                  <p>{item.hp_at_1st_level}</p>
                </div>
                <br></br>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Hp after first level</p>
                  <p>{item.hp_at_higher_levels}</p>
                </div>
                <br></br>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Armor Proficiency</p>
                  <p>{item.prof_armor}</p>
                </div>
                <br></br>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Weapon Proficiency</p>
                  <p>{item.prof_weapons}</p>
                </div>
                <br></br>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Tool Proficiency</p>
                  <p>{item.prof_tools}</p>
                </div>
                <br></br>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Saving Throw Proficiency</p>
                  <p>{item.prof_saving_throws}</p>
                </div>
                <br></br>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Skill Proficiency</p>
                  <p>{item.prof_skills}</p>
                </div>
                <br></br>
                <div key={index} class="nes-container is-dark with-title is-centered">
                <p class="title">Starting Equipment</p>
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
        <button class="nes-btn is-success" onClick={() => setMyChar(userClass)}>Save Class!</button>
        </div>
    </>
  );
}