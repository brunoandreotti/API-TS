//ENV variables
import config from 'config'
import dotenv from 'dotenv-safe'
import express from 'express'
import dbConnection from '../config/db'
//Logger
import Logger from '../config/logger'
//Middelwares
import morganMiddleware from './middleware/morganMiddleware'

//Router
import router from './routes/movieRouter'

//Dotenv
dotenv.config()

const app = express()

const PORT = config.get<number>('PORT')

//JSON middleware

app.use(express.json())

//Morgan
app.use(morganMiddleware)

//Rotas
app.use('/movie', router)

app.listen(PORT, async () => {
  try {
    await dbConnection()
  Logger.info(`App rodando na porta ${PORT}`)
  } catch (error) {
    Logger.info(`Erro ao iniciar servidor: ${error}`)
  }


  
})
