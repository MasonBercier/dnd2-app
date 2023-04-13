import { setDoc, doc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import alignmentChart from '../images/Alignment-chart.jpg'

export default function AlignmentSelect() {
    const [alignment, setAlignment] = React.useState('');
    console.log(alignment)

    const navigate = useNavigate()

    const handleChange = (event) => {
        setAlignment(event.target.value)
    }

    const addAlignToDb = () => {
        setDoc(doc(db, "users", auth.currentUser.uid, "character", alignment), {
            alignment: alignment
        })
        navigate('/rollstats')
    }
      
    return (
        <>
        <h1 className='AlignmentTitle'>Choose your alignment</h1>
        <div className='AlignSelect'>
        <div class="nes-select">
        <select required id="alignment_select" onChange={handleChange}>
            <option value="" disabled selected hidden>Select...</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="Neutral Neutral">Neutral Neutral</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Chaotic Evil">Chaotic Evil</option> 
        </select>
        </div>
        </div>
        <div className='AlignmentImg'>
            <img src={alignmentChart} alt="chart" />
        </div>
        <div className="SaveAlignButton">
        <button class="nes-btn is-success" onClick={addAlignToDb}>Save Alignment!</button>
        </div>
        </>
    )
}
    

{/* <option value="Lawful Good">Lawful Good</option>
<option value="Lawful Neutral">Lawful Neutral</option>
<option value="Lawful Evil">Lawful Evil</option>
<option value="Neutral Good">Neutral Good</option>
<option value="Neutral Neutral">Neutral Neutral</option>
<option value="Neutral Evil">Neutral Evil</option>
<option value="Chaotic Good">Chaotic Good</option>
<option value="Chaotic Neutral">Chaotic Neutral</option>
<option value="Chaotic Evil">Chaotic Evil</option> */}

