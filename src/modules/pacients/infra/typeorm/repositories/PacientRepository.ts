import { getRepository, Repository, Like } from 'typeorm';

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

  public async findByPartName(name: string): Promise<Pacient[] | undefined> {
    const findName = await this.ormRepository.find({
      where: { name: Like(`${name.toUpperCase()}%`) },
    });

    if (!findName) {
      return undefined;
    }

    return findName;
  }

  public async findById(id: string): Promise<Pacient | undefined> {
    const pacientId = await this.ormRepository.findOne(id);

    return pacientId;
  }

  public async listAllPacients(): Promise<Pacient[] | undefined> {
    const pacients = await this.ormRepository.find({
      select: [
        'name',
        'phone',
        'cpf',
        'address',
        'job',
        'instagram',
        'birthday',
      ],
      order: { name: 'ASC' },
    });

    return pacients;
  }

  public async save(pacient: Pacient): Promise<Pacient> {
    return this.ormRepository.save(pacient);
  }
}

export default PacientsRepository;
