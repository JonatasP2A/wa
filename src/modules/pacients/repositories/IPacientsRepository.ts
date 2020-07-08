import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

import ICreatePacientDTO from '@modules/pacients/dtos/ICreatePacientDTO';

export default interface IPacientsRepository {
  create(data: ICreatePacientDTO): Promise<Pacient>;
  findByName(name: string): Promise<Pacient | undefined>;
}
