import express from 'express'
import { setUser } from '../controller/UserController.js'

const UserRoutee = express.Router()
UserRoutee.post("/add",setUser)

export default UserRoutee