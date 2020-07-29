import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';

import ICreateAttendanceDTO from '@modules/attendances/dtos/ICreateAttendanceDTO';

export default interface IAttendanceRepository {
  create(data: ICreateAttendanceDTO): Promise<Attendance>;
  findByDate(date: Date): Promise<Attendance[]>;
  findById(id: string): Promise<Attendance | undefined>;
  remove(data: Attendance): Promise<void>;
}
