import { Router } from 'express';

import PacientController from '@modules/pacients/infra/http/controllers/PacientController';

const pacientsRouter = Router();
const pacientsController = new PacientController();

pacientsRouter.post('/', pacientsController.create);
pacientsRouter.get('/:id', pacientsController.show);
pacientsRouter.put('/:id', pacientsController.update);

export default pacientsRouter;
