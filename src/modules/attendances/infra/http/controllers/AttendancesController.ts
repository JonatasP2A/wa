import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateAttendanceService from '@modules/attendances/services/CreateAttendanceService';

export default class AttendanceController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      pacient_id,
      attendance_date,
      start_hour,
      end_hour,
      treatment,
    } = request.body;

    const createAttendance = container.resolve(CreateAttendanceService);

    const attendance = await createAttendance.execute({
      pacient_id,
      attendance_date,
      start_hour,
      end_hour,
      treatment,
    });

    return response.json(classToClass(attendance));
  }
}
