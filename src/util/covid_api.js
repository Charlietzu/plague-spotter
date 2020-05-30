

export const getWorldData = async (callback) => {
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

export const getCountryData = async (countryDataObj) => {
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