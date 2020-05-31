import React from 'react'

const DataContext = React.createContext({
    countriesJson:{},
    countriesDensity:{},
    countriesCovid:{}
})

export default DataContext;