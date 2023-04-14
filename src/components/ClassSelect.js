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
                <h3>Hit Dice: {item.hit_dice}</h3>
                <p>{item.desc}</p>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Hp at first level</p>
                  <p>{item.hp_at_1st_level}</p>
                </div>
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Hp after first level</p>
                  <p>{item.hp_at_higher_levels}</p>
                </div>
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Armor Proficiency</p>
                  <p>{item.prof_armor}</p>
                </div>
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Weapon Proficiency</p>
                  <p>{item.prof_weapons}</p>
                </div>
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Tool Proficiency</p>
                  <p>{item.prof_tools}</p>
                </div>
                <br></br>
                <div className="nes-container is-dark with-title is-centered">
                <p className="title">Saving Throw Proficiency</p>
                  <p>{item.prof_saving_throws}</p>
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
