//const express = require('express')
//const  routes = require ('./routes' )
//const database = require('./database')
import express from "express"
import routes  from  "./routes"
//import database from "./database"

import './database'

class App {
      constructor() {
        this.app = express()

        this.middlewares()
        this.routes()
      }

      middlewares() {
          this.app.use(express.json())
      }
      routes() {
        this.app.use(routes)
      }
}

export default new App().app
//module.exports= new App().appclear