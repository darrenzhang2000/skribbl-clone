var express = require('express')

var app = experss();

app.get('/', (req, res)=>{
    res.send('tamarind')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})