//const  { Router } = require("express")
import { Router } from "express"

import UserController from "../app/controllers/UserController"

const routes = new Router()

routes.post('/users' , UserController.store)

    return response.json({message:"CODE-BURGER  arrumado CONST X IMPORT 03-12-2022 as 14:37"})       




 export default routes