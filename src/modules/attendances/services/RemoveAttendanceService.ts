import { inject, injectable } from 'tsyringe';

import IAttendancesRepository from '@modules/attendances/repositories/IAttendancesRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class RemoveAttendanceService {
  constructor(
    @inject('AttendancesRepository')
    private attendancesRepository: IAttendancesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const attendance = await this.attendancesRepository.findById(id);

    if (!attendance) {
      throw new AppError('Atendimento não encontrado.');
    }

    await this.attendancesRepository.remove(attendance);
  }
}

export default RemoveAttendanceService;
