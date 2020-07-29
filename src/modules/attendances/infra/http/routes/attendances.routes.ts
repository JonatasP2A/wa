import { Router } from 'express';

import AttendancesController from '@modules/attendances/infra/http/controllers/AttendancesController';
import AttendancesInDay from '@modules/attendances/infra/http/controllers/AttendancesInDay';

const paymentsRouter = Router();
const attendancesController = new AttendancesController();
const attendancesInDay = new AttendancesInDay();

paymentsRouter.post('/', attendancesController.create);
paymentsRouter.get('/', attendancesInDay.show);

export default paymentsRouter;
