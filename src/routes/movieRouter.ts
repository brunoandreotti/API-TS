import { Router } from 'express'
const router = Router()

//Controllers
import CreateMovieController from '../controllers/createMovieController'
import FindMovieController from '../controllers/findMovieController'

//Middlewares
import { validate } from '../middleware/handleValidation'
import { movieValidation } from '../middleware/movieValidation'



//Rotas
//Rota deve criar uma novo filme
router.post('/create', movieValidation(), validate, CreateMovieController.handle)

//Rota deve encontrar um filme baseado no seu título
router.get('/:title', FindMovieController.handle)

export default router
