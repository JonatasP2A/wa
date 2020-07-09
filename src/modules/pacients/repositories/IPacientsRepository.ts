import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

import ICreatePacientDTO from '@modules/pacients/dtos/ICreatePacientDTO';

export default interface IPacientsRepository {
  create(data: ICreatePacientDTO): Promise<Pacient>;
  findByName(name: string): Promise<Pacient | undefined>;
  findByPartName(name: string): Promise<Pacient[] | undefined>;
  findById(id: string): Promise<Pacient | undefined>;
  listAllPacients(): Promise<Pacient[] | undefined>;
  save(pacient: Pacient): Promise<Pacient>;
}
