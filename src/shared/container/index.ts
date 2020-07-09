import { container } from 'tsyringe';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';
import PacientRepository from '@modules/pacients/infra/typeorm/repositories/PacientRepository';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';
import PaymentsRepository from '@modules/payments/infra/typeorm/repositories/PaymentsRepository';

container.registerSingleton<IPacientsRepository>(
  'PacientRepository',
  PacientRepository,
);

container.registerSingleton<IPaymentsRepository>(
  'PaymentsRepository',
  PaymentsRepository,
);
