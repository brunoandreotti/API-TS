import { body } from 'express-validator'

export const movieValidation = () => {
  return [
    body('title')
      .isString()
      .withMessage('O título é obrigatório')
      .isLength({ min: 1 })
      .withMessage('O título é obrigatório.'),

    body('rating')
      .isNumeric()
      .withMessage('A nota precisa ser um número.')
      .custom((value: number) => {
        if (value < 0 || value > 5) {
          throw new Error('A nota precisa ser entre 0 e 5.')
        }
        return true
      }),

    body('description').isString().withMessage('A descrição é obrigatória.'),
    body('poster').isURL().withMessage('A foto precisa ser uma URL.')

  ]
}
