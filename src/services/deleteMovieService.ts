//Model
import { MovieModel } from '../models/MovieModel'
//Type
import { Movie } from '../types/MovieType'

class DeleteMovieService {
  static async execute(data: Movie) {
    try {
      return await MovieModel.deleteOne(data)
      
    } catch (error) {
      return error
    }
  }
}

export default DeleteMovieService