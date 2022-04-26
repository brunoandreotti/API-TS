import { Request, Response } from 'express'
//Logger
import Logger from '../../config/logger'
//Service
import FindMovieService from '../services/findMovieService'
import HandleTitleService from '../services/handleTitleService'

class FindMovieController {
  static async handle(req: Request, res: Response) {
    const title: string = req.params.title

    const newTitle = HandleTitleService.execute(title)

    console.log(newTitle)

    try {
      //Verifica se o filme já existe
      const movie = await FindMovieService.execute(newTitle)

      //Se não existir 
      if (!movie) {
        return res.status(400).json({ message: 'Filme não cadastrado' })
      }

      return res.status(201).json(movie)
    } catch (error) {
      Logger.error(`Erro: ${error}`)
      return res.status(400).json({ message: error })
    }
  }
}

export default FindMovieController
