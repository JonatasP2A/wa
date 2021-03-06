import { inject, injectable } from 'tsyringe';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

@injectable()
class FindPacientService {
  constructor(
    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute(id: string): Promise<Pacient | undefined> {
    const pacient = await this.pacientRepository.findById(id);

    return pacient;
  }
}

export default FindPacientService;
