import {Request, Response} from 'express'


//Model
import { MovieModel } from '../models/MovieModel'
//Type
import { Movie } from '../types/MovieType'


class CreateMovieService {
  static async execute(data: Movie) {
    try {
      const movie = await MovieModel.create(data)
      return movie
    } catch (error) {
      return error
    }
  }
}

export default CreateMovieService
