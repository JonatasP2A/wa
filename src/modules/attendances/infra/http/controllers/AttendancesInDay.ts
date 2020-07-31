import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListAttendancesInDayService from '@modules/attendances/services/ListAttendancesInDayService';

export default class AttendanceInDayController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { date } = request.params;

    const listAttendances = container.resolve(ListAttendancesInDayService);

    const attendances = await listAttendances.execute(date);

    return response.json(classToClass(attendances));
  }
}
