const express=require("express")
const fs=require("fs")
const https=require("https")

let app=express()

app.get("/secret",(req,res)=>{
    res.send("secret is 34")
})

https.createServer({
    cert:fs.readFileSync("cert.pem"),
    key:fs.readFileSync("key.pem")
},app).listen(5000,()=>{
    console.log("this server  is ruinning on port 5000");
})