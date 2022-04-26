import { Request, Response } from 'express'
//Logger
import Logger from '../../config/logger'
//Service
import FindAllMoviesService from '../services/findAllMoviesService'

class FindAllMoviesController {
  static async handle(req: Request, res: Response) {
    try {
      //Verifica se o filme já existe
      const movies = await FindAllMoviesService.execute()

      //Se não existir
      if (!movies) {
        return res.status(400).json({ message: 'Filmes não cadastrados' })
      }

      return res.status(201).json(movies)
    } catch (error) {
      Logger.error(`Erro: ${error}`)
      return res.status(400).json({ message: error })
    }
  }
}

export default FindAllMoviesController
