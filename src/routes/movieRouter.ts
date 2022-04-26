import { Router } from 'express'
const router = Router()

//Controllers
import CreateMovieController from '../controllers/createMovieController'

//Middlewares
import { validate } from '../middleware/handleValidation'
import { movieValidation } from '../middleware/movieValidation'



//Rotas
router.post('/create', movieValidation(), validate, CreateMovieController.handle)

export default router
