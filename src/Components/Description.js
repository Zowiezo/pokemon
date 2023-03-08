import React from 'react'

const Description = ({heightpok, weightpok, pokstat1, pokstat2, pokstat3, 
  pokstat4, pokstat5, pokstat6, posbs1, posbs2, posbs3, posbs4, posbs5, posbs6}) => {
  return (
  <div className="desc">
    <p>Height is {heightpok*10} cm</p>
    <p>Weight is {weightpok*0.1} kg</p>
    <h3>Stats</h3>
    <p>{pokstat1}: {posbs1}</p>
    <p>{pokstat2}: {posbs2}</p>
    <p>{pokstat3}: {posbs3}</p>
    <p>{pokstat4}: {posbs4}</p>
    <p>{pokstat5}: {posbs5}</p>
    <p>{pokstat6}: {posbs6}</p> 
  </div>
    )
}

export default Description
