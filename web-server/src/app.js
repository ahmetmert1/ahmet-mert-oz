const express = require("express")
const fs = require("fs")

const app = express()

//portun belirlenmesi
const port = process.env.PORT || 3000


//anasayfa 
app.get("/",(req,res)=>{

   const dataBuffer = fs.readFileSync("./public/index.html")
   const dataBufferString = dataBuffer.toString()

    res.send(dataBufferString)

})

//test_text sayfasi
app.get("/test_text",(req,res)=>{


    
    res.send("<p>Ahmet Mert ÖZ</p>")

})

//test_json sayfasi
app.get("/test_json",(req,res)=>{

    const dataBuffer = fs.readFileSync("./test_json.json")
    const dataBufferString = dataBuffer.toString()
    const dataJSON = JSON.parse(dataBufferString)
    
    res.send(dataJSON)

})

//test_geocode sayfasi
app.get("/test_geocode",(req,res)=>{


    
    res.send("<p>Ahmet Mert ÖZ</p>")

})

//test_weather sayfasi
app.get("/test_weather",(req,res)=>{


    
    res.send("<p>Ahmet Mert ÖZ</p>")

})






app.listen(port, ()=>{
    console.log("server " + port  + " portunda calismaya basladi !");
})