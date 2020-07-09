import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

interface IRequest {
  id: string;
  name: string;
  phone?: string;
  cpf?: string;
  address?: string;
  job?: string;
  birthday?: string;
  instagram?: string;
}

@injectable()
class UpdatePacientService {
  constructor(
    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute({
    id,
    name,
    phone,
    cpf,
    address,
    job,
    birthday,
    instagram,
  }: IRequest): Promise<Pacient> {
    const pacient = await this.pacientRepository.findById(id);

    if (!pacient) {
      throw new AppError('Paciente não encontrado.');
    }

    pacient.name = name;

    if (phone) {
      pacient.phone = phone;
    }

    if (cpf) {
      pacient.cpf = cpf;
    }

    if (address) {
      pacient.address = address;
    }

    if (job) {
      pacient.job = job;
    }

    if (birthday) {
      pacient.birthday = birthday;
    }

    if (instagram) {
      pacient.instagram = instagram;
    }

    return this.pacientRepository.save(pacient);
  }
}

export default UpdatePacientService;
