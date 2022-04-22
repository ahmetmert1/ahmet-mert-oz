const request = require("request")

const geocode = (adress,callback)=>{

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(adress) + ".json?access_token=pk.eyJ1IjoiaWZzNSIsImEiOiJjbDFveGZ2cjIxNjV3M2tvMm1kaW45MjF3In0.jakzckr8Zkj8Xdbo8yQ05w"

    const havaDurumuBilgiAl = request({url : url, json : true},(error,data)=>{

        if(error){
            callback(error,undefined)
        }else{
            callback(undefined,data.body)
        }

    })

}

module.exports = {
    geocode : geocode
}