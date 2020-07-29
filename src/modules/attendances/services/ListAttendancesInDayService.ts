import { inject, injectable } from 'tsyringe';

import IAttendancesRepository from '@modules/attendances/repositories/IAttendancesRepository';

import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';

@injectable()
class ListAttendancesInDayService {
  constructor(
    @inject('AttendancesRepository')
    private attendancesRepository: IAttendancesRepository,
  ) {}

  public async execute(date: Date): Promise<Attendance[]> {
    const attendances = await this.attendancesRepository.findByDate(date);

    return attendances;
  }
}

export default ListAttendancesInDayService;
