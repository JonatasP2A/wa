import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import FindPacientByNameService from '@modules/pacients/services/FindPacientByNameService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const showPacients = container.resolve(FindPacientByNameService);

    const pacient = await showPacients.execute({ name });

    return response.json(classToClass(pacient));
  }
}
