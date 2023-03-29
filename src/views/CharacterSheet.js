import React, { useState } from 'react'

export default function CharacterSheet() {
  const [name, setName] = useState('Alphons')
  const [level, setLevel] = useState(1)
  const [playerLevel, setPLayerLevel] = useState(0)
  const [profBonus, setProfBonus] = useState()
  const [strScore, setStrScore] = useState()
  const [strMod, setStrMod] = useState()
  const [dexScore, setDexScore] = useState()
  const [dexMod, setDexMod] = useState()
  const [conScore, setConScore] = useState()
  const [conMod, setConMod] = useState()
  const [intScore, setIntScore] = useState()
  const [intMod, setIntMod] = useState()
  const [wisScore, setWisScore] = useState()
  const [wisMod, setWisMod] = useState()
  const [chaScore, setChaScore] = useState()
  const [chaMod, setChaMod] = useState()

  
    function updateModifiers(){
        setStrScore(document.getElementById('strScore').value)
        setStrMod(Math.floor((strScore - 10)/2))
        setDexScore(document.getElementById('dexScore').value)
        setDexMod(Math.floor((dexScore - 10)/2))
        setConScore(document.getElementById('conScore').value)
        setConMod(Math.floor((conScore - 10)/2))
        setIntScore(document.getElementById('intScore').value)
        setIntMod(Math.floor((intScore - 10)/2))
        setWisScore(document.getElementById('wisScore').value)
        setWisMod(Math.floor((wisScore - 10)/2))
        setChaScore(document.getElementById('chaScore').value)
        setChaMod(Math.floor((chaScore - 10)/2))
  }

    function updateProfBonus() {
        //update proficiency bonus based on char level
        // var playerLevel = parseInt(document.getElementById('playerLevel').value);
        if(playerLevel >= 17){
            setProfBonus(6)
        } else if (playerLevel >= 13) {
            document.getElementById('profBonus').value = 5;
        } else if (playerLevel >= 9) {
            document.getElementById('profBonus').value = 4;
        } else if (playerLevel >= 5) {
            document.getElementById('profBonus').value = 3;
        } else {
            setProfBonus(2)
        }
    }

    function setSkills(){
         
        // setProfBonus(parseInt(document.getElementById("profBonus").value))

        if (document.getElementById("acroProf").checked === true) {
            document.getElementById("acroScore").value = dexMod + profBonus;
          } else {
            document.getElementById("acroScore").value = dexMod;
          }
          if (document.getElementById("animProf").checked === true) {
            document.getElementById("animScore").value = wisMod + profBonus;
          } else {
            document.getElementById("animScore").value = wisMod;
          }
          if (document.getElementById("arcaProf").checked === true) {
            document.getElementById("arcaScore").value = intMod + profBonus;
          } else {
            document.getElementById("arcaScore").value = intMod;
          }
          if (document.getElementById("athlProf").checked === true) {
            document.getElementById("athlScore").value = strMod + profBonus;
          } else {
            document.getElementById("athlScore").value = strMod;
          }
          if (document.getElementById("decProf").checked === true) {
            document.getElementById("decScore").value = chaMod + profBonus;
          } else {
            document.getElementById("decScore").value = chaMod;
          }
          if (document.getElementById("hisProf").checked === true) {
            document.getElementById("hisScore").value = intMod + profBonus;
          } else {
            document.getElementById("hisScore").value = intMod;
          }
          if (document.getElementById("insProf").checked === true) {
            document.getElementById("insScore").value = wisMod + profBonus;
          } else {
            document.getElementById("insScore").value = wisMod;
          }
          if (document.getElementById("intiProf").checked === true) {
            document.getElementById("intiScore").value = chaMod + profBonus;
          } else {
            document.getElementById("intiScore").value = chaMod;
          }
          if (document.getElementById("invProf").checked === true) {
            document.getElementById("invScore").value = intMod + profBonus;
          } else {
            document.getElementById("invScore").value = intMod;
          }
          if (document.getElementById("medProf").checked === true) {
            document.getElementById("medScore").value = wisMod + profBonus;
          } else {
            document.getElementById("medScore").value = wisMod;
          }
          if (document.getElementById("natProf").checked === true) {
            document.getElementById("natScore").value = intMod + profBonus;
          } else {
            document.getElementById("natScore").value = intMod;
          }
          if (document.getElementById("percProf").checked === true) {
            document.getElementById("percScore").value = wisMod + profBonus;
          } else {
            document.getElementById("percScore").value = wisMod;
          }
          if (document.getElementById("perfProf").checked === true) {
            document.getElementById("perfScore").value = chaMod + profBonus;
          } else {
            document.getElementById("perfScore").value = chaMod;
          }
          if (document.getElementById("persProf").checked === true) {
            document.getElementById("persScore").value = chaMod + profBonus;
          } else {
            document.getElementById("persScore").value = chaMod;
          }
          if (document.getElementById("relProf").checked === true) {
            document.getElementById("relScore").value = intMod + profBonus;
          } else {
            document.getElementById("relScore").value = intMod;
          }
          if (document.getElementById("sleiProf").checked === true) {
            document.getElementById("sleiScore").value = dexMod + profBonus;
          } else {
            document.getElementById("sleiScore").value = dexMod;
          }
          if (document.getElementById("steProf").checked === true) {
            document.getElementById("steScore").value = dexMod + profBonus;
          } else {
            document.getElementById("steScore").value = dexMod;
          }
          if (document.getElementById("survProf").checked === true) {
            document.getElementById("survScore").value = wisMod + profBonus;
          } else {
            document.getElementById("survScore").value = wisMod;
          }
          
        }

    function playerLevelChange() {
        updateProfBonus();
        updateModifiers();
        setSkills();
    }

    function levelUp() {
      setLevel(e => e + 1)
      // the e here can be anything, it references ogState
      // return {...e, }
      //this makes a merge not an overwrite
    }
  

  return (
    <div>
  <link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <div className="container">
    <div className="row">
      <div className="col-4">
        <h2>Ability Scores</h2>
        <br />
        <table className="table">
          <tbody><tr>
              <th>Ability</th>
              <th>Score</th>
              <th>Mod</th>
            </tr>
            <tr>
              <td>Strength</td>
              <td><input type="number" defaultValue={10} id="strScore" onChange={updateModifiers} /></td>
              <td><input type="number" defaultValue={0} id="strMod" /></td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td><input type="number" defaultValue={10} id="dexScore" onChange={updateModifiers} /></td>
              <td><input type="number" defaultValue={0} id="dexMod" /></td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td><input type="number" defaultValue={10} id="conScore" onChange={updateModifiers} /></td>
              <td><input type="number" defaultValue='0' id="conMod" /></td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td><input type="number" defaultValue={10} id="intScore" onChange={updateModifiers} /></td>
              <td><input type="number" defaultValue={0} id="intMod" /></td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td><input type="number" defaultValue={10} id="wisScore" onChange={updateModifiers} /></td>
              <td><input type="number" defaultValue={0} id="wisMod" /></td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td><input type="number" defaultValue={10} id="chaScore" onChange={updateModifiers} /></td>
              <td><input type="number" defaultValue={0} id="chaMod" /></td>
            </tr>
          </tbody></table>
      </div>
      <div className="col-4">
        <h2>Player Level: {playerLevel}</h2>
        <br/>
        <h2>Player Race:</h2>
        <br/>
        <input type="number" id="playerLevel" min={1} max={20} defaultValue={1} onChange={playerLevelChange} />
      </div>
      <div className="col-4">
        <h2>Proficiency Bonus: {profBonus}</h2>
        <br/>
        <input type="number" id="profBonus" value={profBonus}/>
        <br/><br/>
        <h2>Skills</h2>
        <table className="table">
          <tbody><tr>
              <td><input type="checkbox" id="acroProf" onChange={setSkills}/></td>
              <td>Acrobatics:</td>
              <td><input type="number" id="acroScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="animProf" onChange={setSkills} /></td>
              <td>Animal Handling:</td>
              <td><input type="number" id="animScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="arcaProf" onChange={setSkills} /></td>
              <td>Arcana:</td>
              <td><input type="number" id="arcaScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="athlProf" onChange={setSkills}/></td>
              <td>Athetics:</td>
              <td><input type="number" id="athlScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="decProf" onChange={setSkills}/></td>
              <td>Deception:</td>
              <td><input type="number" id="decScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="hisProf" onChange={setSkills}/></td>
              <td>History:</td>
              <td><input type="number" id="hisScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="insProf" onChange={setSkills}/></td>
              <td>Insight:</td>
              <td><input type="number" id="insScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="intiProf" onChange={setSkills}/></td>
              <td>Intimidation:</td>
              <td><input type="number" id="intiScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="invProf" onChange={setSkills}/></td>
              <td>Investigation:</td>
              <td><input type="number" id="invScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="medProf" onChange={setSkills}/></td>
              <td>Medicine:</td>
              <td><input type="number" id="medScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="natProf" onChange={setSkills}/></td>
              <td>Nature:</td>
              <td><input type="number" id="natScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="percProf" onChange={setSkills}/></td>
              <td>Perception:</td>
              <td><input type="number" id="percScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="perfProf" onChange={setSkills}/></td>
              <td>Performance:</td>
              <td><input type="number" id="perfScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="persProf" onChange={setSkills}/></td>
              <td>Persuasion:</td>
              <td><input type="number" id="persScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="relProf" onChange={setSkills}/></td>
              <td>Religion:</td>
              <td><input type="number" id="relScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="sleiProf" onChange={setSkills}/></td>
              <td>Sleight of Hand:</td>
              <td><input type="number" id="sleiScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="steProf" onChange={setSkills}/></td>
              <td>Stealth:</td>
              <td><input type="number" id="steScore" /></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="survProf" onChange={setSkills}/></td>
              <td>Survival:</td>
              <td><input type="number" id="survScore" /></td>
            </tr>
          </tbody></table>
      </div>
    </div>
  </div>
</div>
)
}
