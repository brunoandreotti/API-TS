//ENV variables
import dotenv from 'dotenv-safe'
dotenv.config()

import express from "express"
import config from "config"
import router from './routes/router'
import dbConnection from '../config/db'

const app = express()

const PORT = config.get<number>('PORT')

//JSON middleware

app.use(express.json())

//Logger
import Logger from '../config/logger'

//Rotas
app.use('/api', router)

app.listen(PORT, async () => {
  await dbConnection()
  Logger.info(`App rodando na porta ${PORT}`)
})
