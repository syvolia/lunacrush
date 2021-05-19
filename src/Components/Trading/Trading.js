import React from 'react'

function Trading({marketCap,marketDominance,volatility}) {
    return (
        
              < div className="table">
                <table>
                    <tr>
                        <td>Market Cap</td>
                <td> {marketCap}</td>

                    </tr>
                    <tr>
                        <td>Market Dominance</td>
                        <td>{marketDominance}</td>
                    </tr>
                    <tr>
                        <td>Volatility</td>
                        <td>{volatility}</td>
                    </tr>

                </table>
    
        </div>
    )
}

export default Trading
