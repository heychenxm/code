const express = require("express")

const server = express()

server.get('*', (req, res)=>{
    res.send(`this is url----->${req.url}`)
})

server.listen('12306', ()=>{
    console.log("🚀server is running")
})