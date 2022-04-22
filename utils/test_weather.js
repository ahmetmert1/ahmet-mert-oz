const request = require("request")


const weather = (latitude,longitude,callback)=>{

    const url = "https://api.weatherstack.com/current?access key=........&query=" + latitude + "," + longitude + "&units=m"
    //"https://api.weatherstack.com/current?access key=........&query=" + latitude + "," + longitude + "&units=m"

    const konumBilgileriAl = request({url : url, json : true},(error,data)=>{

        if(error){
            callback(error,undefined)
        }else{
            callback(undefined,data.body)
        }

    })

}

module.exports = {
    weather : weather
}