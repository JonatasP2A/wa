import { inject, injectable } from 'tsyringe';
import { isBefore } from 'date-fns';

import AppError from '@shared/errors/AppError';

import IAttendancesRepository from '@modules/attendances/repositories/IAttendancesRepository';
import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';

interface IRequest {
  pacient_id: string;
  start_hour: Date;
  end_hour: Date;
  treatment: string;
}

@injectable()
class CreateAttendanceService {
  constructor(
    @inject('AttendancesRepository')
    private attendancesRepository: IAttendancesRepository,

    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute({
    pacient_id,
    start_hour,
    end_hour,
    treatment,
  }: IRequest): Promise<Attendance> {
    // const start = parseJSON(start_hour);
    // const end = parseJSON(end_hour);

    if (isBefore(end_hour, start_hour)) {
      throw new AppError('Horário final antes do inicial.');
    }

    const pacientExists = await this.pacientRepository.findById(pacient_id);

    if (!pacientExists) {
      throw new AppError('Paciente não cadastrado');
    }

    const attendance = await this.attendancesRepository.create({
      pacient_id,
      start_hour,
      end_hour,
      treatment,
    });

    return attendance;
  }
}

export default CreateAttendanceService;
