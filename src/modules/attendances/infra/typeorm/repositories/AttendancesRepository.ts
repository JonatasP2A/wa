import { getRepository, Repository, Raw } from 'typeorm';

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
    const attendances = await this.ormRepository.find({
      where: {
        start_hour: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'YYYY-MM-dd') = '${date}'`,
        ),
      },
      order: { start_hour: 'ASC' },
    });

    return attendances;
  }

  public async findById(id: string): Promise<Attendance | undefined> {
    const attendance = await this.ormRepository.findOne(id);

    return attendance;
  }

  public async remove(data: Attendance): Promise<void> {
    await this.ormRepository.remove(data);
  }
}

export default AttendancesRepository;
