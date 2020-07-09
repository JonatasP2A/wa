import { Router } from 'express';

import PacientsSearchController from '@modules/pacients/infra/http/controllers/PacientsSearchController';

const pacientsSearchRouter = Router();
const pacientsSearchController = new PacientsSearchController();

pacientsSearchRouter.get('/:name', pacientsSearchController.show);

export default pacientsSearchRouter;
