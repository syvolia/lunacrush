import React from 'react'
import './keymetrics.css'
function keymetrics({galaxyScore,altRank,correlationRank}) {
    return (
        
            <div className="table">
                <table>
                    <tr>
                        <td>Galaxy Score</td>
                        <td>{galaxyScore}</td>

                    </tr>
                    <tr>
                        <td>AltRank</td>
                        <td>{altRank}</td>
                    </tr>
                    <tr>
                        <td>Correlation Rank</td>
                        <td>{correlationRank}</td>
                    </tr>

                </table>
       </div>
        
    )
}

export default keymetrics
