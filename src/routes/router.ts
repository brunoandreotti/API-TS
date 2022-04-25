import {Router, Request, Response} from 'express'

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
  console.log('teste')
})

export default router

