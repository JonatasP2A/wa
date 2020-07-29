import { getRepository, Repository } from 'typeorm';
import { parseJSON, isSameDay } from 'date-fns';

import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';

import IAttendanceRepository from '@modules/attendances/repositories/IAttendancesRepository';

import ICreateAttendanceDTO from '@modules/attendances/dtos/ICreateAttendanceDTO';

class AttendancesRepository implements IAttendanceRepository {
  private ormRepository: Repository<Attendance>;

  constructor() {
    this.ormRepository = getRepository(Attendance);
  }

  public async create({
    pacient_id,
    start_hour,
    end_hour,
    treatment,
  }: ICreateAttendanceDTO): Promise<Attendance> {
    const attendance = this.ormRepository.create({
      pacient_id,
      start_hour,
      end_hour,
      treatment,
    });

    await this.ormRepository.save(attendance);

    return attendance;
  }

  public async findByDate(date: Date): Promise<Attendance[]> {
    const formatedDate = parseJSON(date);

    const attendances = await this.ormRepository.find({
      where: {
        start_hour: isSameDay(date, formatedDate),
      },
      order: { start_hour: 'DESC' },
    });

    return attendances;
  }
}

export default AttendancesRepository;
