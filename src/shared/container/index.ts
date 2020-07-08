import { container } from 'tsyringe';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';
import PacientRepository from '@modules/pacients/infra/typeorm/repositories/PacientRepository';

container.registerSingleton<IPacientsRepository>(
  'PacientRepository',
  PacientRepository,
);
