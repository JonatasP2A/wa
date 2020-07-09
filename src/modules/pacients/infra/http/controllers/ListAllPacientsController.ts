import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import FindAllPacientsService from '@modules/pacients/services/FindAllPacientsService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showPacients = container.resolve(FindAllPacientsService);

    const pacient = await showPacients.execute();

    return response.json(classToClass(pacient));
  }
}
