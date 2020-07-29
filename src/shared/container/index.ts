import { container } from 'tsyringe';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';
import PacientRepository from '@modules/pacients/infra/typeorm/repositories/PacientRepository';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';
import PaymentsRepository from '@modules/payments/infra/typeorm/repositories/PaymentsRepository';

import IAttendancesRepository from '@modules/attendances/repositories/IAttendancesRepository';
import AttendancesRepository from '@modules/attendances/infra/typeorm/repositories/AttendancesRepository';

container.registerSingleton<IPacientsRepository>(
  'PacientRepository',
  PacientRepository,
);

container.registerSingleton<IPaymentsRepository>(
  'PaymentsRepository',
  PaymentsRepository,
);

container.registerSingleton<IAttendancesRepository>(
  'AttendancesRepository',
  AttendancesRepository,
);
