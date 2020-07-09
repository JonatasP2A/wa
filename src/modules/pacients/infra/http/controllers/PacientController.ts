import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreatePacientService from '@modules/pacients/services/CreatePacientService';

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
}
