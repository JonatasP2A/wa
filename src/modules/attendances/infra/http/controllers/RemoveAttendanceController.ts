import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RemoveAttendanceService from '@modules/attendances/services/RemoveAttendanceService';

export default class RemoveAttendanceController {
  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const removeAttendance = container.resolve(RemoveAttendanceService);

    await removeAttendance.execute(id);

    return response.status(204).send();
  }
}
