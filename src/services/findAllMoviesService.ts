//Model
import { MovieModel } from '../models/MovieModel'
//Type

class FindAllMoviesService {
  static async execute() {
    try {
      const movies = await MovieModel.find()

      return movies
    } catch (error) {
      return error
    }
  }
}

export default FindAllMoviesService