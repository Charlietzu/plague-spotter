

const getWorldData = async () => {
    try{
        const dataReq = await fetch("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true")
        const json = await dataReq.json()
        
        return json
    }
    catch(err){
        console.error(err)
        return false
    }
}

const getCountryData = async (countryDataObj) => {
    try{
        const apiURL = countryDataObj.moreData
        const dataReq = await fetch(apiURL)
        const json = await dataReq.json()
        
        return json
    }
    catch(err){
        console.error(err)
        return false
    }
}

const baseTestReq = async () => {
    const worldData = await getWorldData()
    const firstCountry = await getCountryData(worldData[0])

    console.log(worldData)
    console.log(firstCountry)

    return firstCountry
}
