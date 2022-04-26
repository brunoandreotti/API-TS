import { Request, Response } from 'express'
//Logger
import Logger from '../../config/logger'
import DeleteMovieService from '../services/deleteMovieService'
//Service
import FindMovieService from '../services/findMovieService'
import HandleTitleService from '../services/handleTitleService'

class DeleteMovieController {
  static async handle(req: Request, res: Response) {
    const title: string = req.params.title

    const newTitle = HandleTitleService.execute(title)

    //Verifica se o filme já existe
    const movie = await FindMovieService.execute(newTitle)

    //Se não existir
    if (!movie) {
      return res.status(400).json({ message: 'Filme não cadastrado' })
    }

    try {
      await DeleteMovieService.execute(movie)

      return res.status(201).json({ message: 'Filme deletado com sucesso' })
    } catch (error) {
      Logger.error(`Erro: ${error}`)
      return res.status(400).json({ message: error })
    }
  }
}

export default DeleteMovieController
