import { getRepository, Repository } from 'typeorm';

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
    const pacient = await this.ormRepository.findOne(pacient_id);

    const attendance = this.ormRepository.create({
      pacient,
      start_hour,
      end_hour,
      treatment,
    });

    return attendance;
  }

  public async findByDate(date: Date): <Attendance | undefined> {

  }
}

export default AttendancesRepository;
