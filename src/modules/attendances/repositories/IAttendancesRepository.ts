import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';

import ICreateAttendanceDTO from '@modules/attendances/dtos/ICreateAttendanceDTO';

export default interface IAttendanceRepository {
  create(data: ICreateAttendanceDTO): Promise<Attendance>;
  findByDate(data: Date): Promise<Attendance | undefined>;
}
