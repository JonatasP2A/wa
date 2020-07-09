import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

interface IRequest {
  id: string;
}

@injectable()
class CreatePacientService {
  constructor(
    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Pacient | undefined> {
    const pacient = await this.pacientRepository.findById(id);

    if (!pacient) {
      throw new AppError('Paciente não cadastrado.');
    }

    return pacient;
  }
}

export default CreatePacientService;
