import express from 'express'
import { getUser, setUser } from '../controller/UserController.js'

const UserRoutee = express.Router()
UserRoutee.post("/add",setUser)
UserRoutee.get("/all",getUser)


export default UserRoutee