import legendItems from "../entities/LegendItems";
import roundPercentages from "../tasks/roundPercentages";

const Legend = () => {

  let percentageArray = [];

  legendItems.forEach((item) => {
    percentageArray.push((item.noOfCountries/item.totalNoOfCountries)*100)
  })

  const approximatedPercentages = roundPercentages(percentageArray, 100)
  console.log();
  return (
    <div className='my-legend'>
      <div className='legend-scale'>
        <ul className='legend-labels' >
          <li style={{width: '110px', marginTop: '15px'}}><span style={{textAlign : 'right', width: '100px'}}>$ Usage</span></li>
          {
            legendItems.map((item, i) => (
              <li key={i}><span key={item} style={{background : item.color, '--width': `${approximatedPercentages[i]*12}px`}}></span></li>
            ))
          }
        </ul>
        <ul style={{marginTop: '-5px'}} className='legend-squares'>
          <li style={{width: '110px'}}><span style={{textAlign : 'right', width: '100px', border: '#000000'}}></span></li>
          {
            legendItems.map((item, i) => (
              <div key={i}>
                <li style={{'--width': `${approximatedPercentages[i]*6}px`}}><span className="actual-square" style={{background : item.color}}></span >{item.title}</li>
                <li style={{'--width': `${approximatedPercentages[i]*6}px`}}>{approximatedPercentages[i]}%</li>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Legend