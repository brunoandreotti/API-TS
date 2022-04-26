//Model
import { MovieModel } from '../models/MovieModel'
//Type

class FindMovieService {
  static async execute(title: string) {
    try {
      const movie = await MovieModel.findOne({ title })

      return movie
    } catch (error) {
      return error
    }
  }
}

export default FindMovieService
