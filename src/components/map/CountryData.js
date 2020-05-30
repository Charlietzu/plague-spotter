import React from 'react'
import './CountryData.css'

function CountryData(props) {
    return (
        <div className="data-wrapper">
            <div className="data-container">
                <h1>Dados do Covid</h1>
                <div>
                    Testados: {props.tested}
                </div>
                <div>
                    Infectados: {props.infected}
                </div>
                <div>
                    Mortos: {props.deceased}
                </div>
                <div>
                    Curados: {props.recovered}
                </div>
            </div>
        </div>
    )
}

export default CountryData
