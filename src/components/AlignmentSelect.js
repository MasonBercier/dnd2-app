import * as React from 'react';
import alignmentChart from '../images/Alignment-chart.jpg'

export default function AlignmentSelect() {
    const [alignment, setAlignment] = React.useState('');

    const handleChange = (event) => {
        setAlignment(event.target.value)
      }
      
    return (
        <>
        <form>
        <select value={alignment} onChange={handleChange}>
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
        </form>
        <img src={alignmentChart} alt="chart" />
        </>
    )
}
    

