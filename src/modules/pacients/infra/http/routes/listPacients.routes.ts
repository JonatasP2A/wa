import { Router } from 'express';

import ListAllPacientsController from '@modules/pacients/infra/http/controllers/ListAllPacientsController';

const listPacientsRouter = Router();
const listPacientsController = new ListAllPacientsController();

listPacientsRouter.get('/', listPacientsController.show);

export default listPacientsRouter;
