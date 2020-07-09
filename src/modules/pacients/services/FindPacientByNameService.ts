import { inject, injectable } from 'tsyringe';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

interface IRequest {
  name: string;
}

@injectable()
class FindPacientByNameService {
  constructor(
    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Pacient[] | undefined> {
    const pacient = await this.pacientRepository.findByPartName(name);

    return pacient;
  }
}

export default FindPacientByNameService;
