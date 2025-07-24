import express from 'express'
import dbConnection from './db/db.js'

const app = express()
app.use(express.json())
dbConnection()

app.listen(5001,()=>{
    console.log("server is running")
})