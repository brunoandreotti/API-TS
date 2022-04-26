import { Request, Response } from 'express'
//Logger
import Logger from '../../config/logger'
//Service
import CreateMovieService from '../services/createMovieService'
import FindMovieService from '../services/findMovieService'
//Type
import { Movie } from '../types/MovieType'

class CreateMovieController {
  static async handle(req: Request, res: Response) {
    const { title, rating, description, poster }: Movie = req.body

    //Verifica se o filme já existe
    const movieAlreadyExists = await FindMovieService.execute(title)

    //Se já existir informa que já existe
    if (movieAlreadyExists) {
      
      return res.status(400).json({message: 'Filme já cadastrado'})
    }

    const movieData: Movie = { title, rating, poster, description }

    try {
      const movie = await CreateMovieService.execute(movieData)

      return res.status(201).json(movie)
    } catch (error) {
      Logger.error(`Erro: ${error}`)
      return res.status(400).json({ message: error })
    }
  }
}

export default CreateMovieController
