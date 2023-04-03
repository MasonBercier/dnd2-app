import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../context/AppContext'


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
        <div className="ClassSelect">
          <header className="ClassSelect-header">
          </header>
          <br></br>
          <br></br>
          <div className="ClassButtons">
            <button onClick={() => setUserClass('Barbarian')}>Barbarian</button>
            <button onClick={() => setUserClass('Bard')}>Bard</button>
            <button onClick={() => setUserClass('Cleric')}>Cleric</button>
            <button onClick={() => setUserClass('Druid')}>Druid</button>
            <button onClick={() => setUserClass('Fighter')}>Fighter</button>
            <button onClick={() => setUserClass('Monk')}>Monk</button>
            <button onClick={() => setUserClass('Paladin')}>Paladin</button>
            <button onClick={() => setUserClass('Ranger')}>Ranger</button>
            <button onClick={() => setUserClass('Rogue')}>Rogue</button>
            <button onClick={() => setUserClass('Sorcerer')}>Sorcerer</button>
            <button onClick={() => setUserClass('Warlock')}>Warlock</button>
            <button onClick={() => setUserClass('Wizard')}>Wizard</button>
          </div>
          <h3 className="userClass">{userClass}</h3>
        </div>
        <div className="AllClasses">
          {allClasses.map((item, index) => {
             if (userClass === item.name) {
              return (
               <div key={index}>
                <h3>Hit Dice: {item.hit_dice}</h3>
                <p>{item.desc}</p>
                <h6>Hp at first level: {item.hp_at_1st_level}</h6>
                <h6>Hp after first level: {item.hp_at_higher_levels}</h6>
                <h6>Armor Proficiency: {item.prof_armor}</h6>
                <h6>Weapon Proficiency: {item.prof_weapons}</h6>
                <h6>Tool Proficiency: {item.prof_tools}</h6>
                <h6>Saving Throw Proficiency: {item.prof_saving_throws}</h6>
                <h6>Item Proficiency: {item.prof_skills}</h6>
                <h6>Starting Equipment: {item.equipment}</h6>
               </div>
              )
              } else {
                return ''
              }
           })}
        </div>
        <button onClick={() => setMyChar(userClass)}>Save Stats</button>
    </>
  );
}