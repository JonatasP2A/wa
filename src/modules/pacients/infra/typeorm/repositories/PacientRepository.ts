import { getRepository, Repository } from 'typeorm';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import ICreatePacientDTO from '@modules/pacients/dtos/ICreatePacientDTO';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

class PacientsRepository implements IPacientsRepository {
  private ormRepository: Repository<Pacient>;

  constructor() {
    this.ormRepository = getRepository(Pacient);
  }

  public async create(data: ICreatePacientDTO): Promise<Pacient> {
    const pacient = this.ormRepository.create(data);

    await this.ormRepository.save(pacient);

    return pacient;
  }

  public async findByName(name: string): Promise<Pacient | undefined> {
    const findName = await this.ormRepository.findOne({ where: { name } });

    if (!findName) {
      return undefined;
    }

    return findName;
  }

  public async findById(id: string): Promise<Pacient | undefined> {
    const pacientId = await this.ormRepository.findOne(id);

    return pacientId;
  }

  public async save(pacient: Pacient): Promise<Pacient> {
    return this.ormRepository.save(pacient);
  }
}

export default PacientsRepository;
