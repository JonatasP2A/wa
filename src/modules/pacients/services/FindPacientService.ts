import { inject, injectable } from 'tsyringe';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

@injectable()
class ListAllPacientsService {
  constructor(
    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute(): Promise<Pacient[] | undefined> {
    const pacient = await this.pacientRepository.listAllPacients();

    return pacient;
  }
}

export default ListAllPacientsService;
