import { Router } from 'express';

import pacientsRouter from '@modules/pacients/infra/http/routes/pacients.routes';
import pacientsSearchRouter from '@modules/pacients/infra/http/routes/pacientsSearch.routes';
import listPacientsRouter from '@modules/pacients/infra/http/routes/listPacients.routes';

const routes = Router();

routes.use('/pacients', pacientsRouter);
routes.use('/search-pacients', pacientsSearchRouter);
routes.use('/all-pacients', listPacientsRouter);

export default routes;
