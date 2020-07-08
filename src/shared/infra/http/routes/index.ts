import { Router } from 'express';

import pacientsRouter from '@modules/pacients/infra/http/routes/pacients.routes';

const routes = Router();

routes.use('/pacientes', pacientsRouter);

export default routes;
