import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

interface IRequest {
  name: string;
  cpf?: string;
  address?: string;
  job?: string;
  birthday?: string;
  instagram?: string;
}

@injectable()
class CreatePacientService {
  constructor(
    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute(data: IRequest): Promise<Pacient> {
    const checkPacientExists = await this.pacientRepository.findByName(
      data.name,
    );

    if (checkPacientExists) {
      throw new AppError('Paciente já está cadastrado.');
    }

    const pacient = await this.pacientRepository.create(data);

    return pacient;
  }
}

export default CreatePacientService;
