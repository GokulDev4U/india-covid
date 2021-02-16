import React from 'react'
import './Table.css'

const Table = ({statewise}) => {
    return (
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">STATE</th>
                        <th scope="col">CONFIRMED</th>
                        <th scope="col">ACTIVE</th>
                        <th scope="col">RECOVERED</th>
                        <th scope="col">DECREASED</th>  
                    </tr>
                </thead>
                <tbody> 
                    {statewise.map(m =>(
                    <tr key={m.statecode}>
                            <td>{m.state}</td>
                            <td>{m.confirmed}</td>
                            <td>{m.active}</td>
                            <td>{m.recovered}</td>
                            <td>{m.deaths}</td>  
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
