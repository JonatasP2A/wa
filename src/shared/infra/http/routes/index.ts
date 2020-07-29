import { Router } from 'express';

import pacientsRouter from '@modules/pacients/infra/http/routes/pacients.routes';
import pacientsSearchRouter from '@modules/pacients/infra/http/routes/pacientsSearch.routes';
import listPacientsRouter from '@modules/pacients/infra/http/routes/listPacients.routes';

import paymentsRouter from '@modules/payments/infra/http/routes/payments.routes';

import attendancesRouter from '@modules/attendances/infra/http/routes/attendances.routes';

const routes = Router();

routes.use('/pacients', pacientsRouter);
routes.use('/search-pacients', pacientsSearchRouter);
routes.use('/all-pacients', listPacientsRouter);

routes.use('/payments', paymentsRouter);

routes.use('/attendances', attendancesRouter);

export default routes;
