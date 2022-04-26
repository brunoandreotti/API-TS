import { Router } from 'express'
const router = Router()

//Controllers
import CreateMovieController from '../controllers/createMovieController'
import FindMovieController from '../controllers/findMovieController'
import FindAllMoviesController from '../controllers/findAllMoviesControllers'
import DeleteMovieController from '../controllers/deleteMovieController'

//Middlewares
import { validate } from '../middleware/handleValidation'
import { movieValidation } from '../middleware/movieValidation'



//Rotas
//Rota deve criar uma novo filme
router.post('/create', movieValidation(), validate, CreateMovieController.handle)

//Rota deve encontrar todos os filmes
router.get('/', FindAllMoviesController.handle)

//Rota deve encontrar um filme baseado no seu título
router.get('/:title', FindMovieController.handle)

//Rota deve deletar um filme baseado no seu título
router.delete('/:title', DeleteMovieController.handle)

export default router
