import {Router, Request, Response} from 'express'

const router = Router()
//Controllers
import CreateMovieController from '../controllers/createMovieController'

//Rotas
router.post('/create', CreateMovieController.handle)



export default router

