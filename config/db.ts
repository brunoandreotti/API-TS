import mongoose from 'mongoose'
import config from 'config'
import Logger from './logger'

async function connect() {
  const dbURI = config.get<string>('dbURI')

  try {
    await mongoose.connect(dbURI)
    Logger.info('Conectou com o banco de dados')
  } catch (e) {
    Logger.error(`Não foi possível conectar: ${e}`)
    process.exit(1)
  }
}

export default connect