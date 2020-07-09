import { Router } from 'express';

import PacientController from '@modules/pacients/infra/http/controllers/PacientController';

const usersRouter = Router();
const pacientsController = new PacientController();

usersRouter.post('/', pacientsController.create);
usersRouter.get('/:id', pacientsController.show);
usersRouter.put('/:id', pacientsController.update);

export default usersRouter;
