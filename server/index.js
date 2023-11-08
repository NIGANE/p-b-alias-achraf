const express = require('express')
const app = express()
const connection = require('./connection')
const cors = require('cors')



app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json({"valid":true})
})
app.get('/categories',(req,res)=>{
    connection.query('SELECT * FROM categories',(err ,result)=>{
        res.json(result)
        })
})

app.listen('3001',()=>{
    console.log('listening on 3001 ...')
})