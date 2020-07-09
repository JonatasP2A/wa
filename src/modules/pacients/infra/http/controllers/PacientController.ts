import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePacientService from '@modules/pacients/services/CreatePacientService';
import FindPacientService from '@modules/pacients/services/FindPacientService';
import UpdatePacientService from '@modules/pacients/services/UpdatePacientService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      phone,
      cpf,
      address,
      job,
      birthday,
      instagram,
    } = request.body;

    const createPacient = container.resolve(CreatePacientService);

    const user = await createPacient.execute({
      name,
      phone,
      cpf,
      address,
      job,
      birthday,
      instagram,
    });

    return response.json(classToClass(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPacient = container.resolve(FindPacientService);

    const pacient = await showPacient.execute(id);

    return response.json(classToClass(pacient));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      name,
      phone,
      cpf,
      address,
      job,
      birthday,
      instagram,
    } = request.body;

    const updatePacient = container.resolve(UpdatePacientService);

    const pacient = await updatePacient.execute({
      id,
      name,
      phone,
      cpf,
      address,
      job,
      birthday,
      instagram,
    });

    return response.json(classToClass(pacient));
  }
}
