import { Router } from 'express';

import AttendancesController from '@modules/attendances/infra/http/controllers/AttendancesController';
import AttendancesInDay from '@modules/attendances/infra/http/controllers/AttendancesInDay';
import RemoveAttendanceController from '@modules/attendances/infra/http/controllers/RemoveAttendanceController';

const paymentsRouter = Router();
const attendancesController = new AttendancesController();
const attendancesInDay = new AttendancesInDay();
const removeAttendanceController = new RemoveAttendanceController();

paymentsRouter.post('/', attendancesController.create);
paymentsRouter.get('/:date', attendancesInDay.show);
paymentsRouter.delete('/:id', removeAttendanceController.remove);

export default paymentsRouter;
