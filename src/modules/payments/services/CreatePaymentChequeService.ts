import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';
import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Payment from '@modules/payments/infra/typeorm/entities/Payment';

interface IRequest {
  pacient_id: string;
  form_payment: 'Cheque';
  amount: number;
  payment_day: Date;
  agency: number;
  account: number;
  name_cheque: string;
}

@injectable()
class CreatePaymentChequeService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,

    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute(data: IRequest): Promise<Payment> {
    if (!data.pacient_id) {
      throw new AppError('Paciente não informado');
    }

    const checkPacientExists = await this.pacientRepository.findById(
      data.pacient_id,
    );

    if (!checkPacientExists) {
      throw new AppError('Paciente não cadastrado');
    }

    if (data.form_payment !== 'Cheque') {
      throw new AppError('Forma de pagamento incorreta');
    }

    const payment = await this.paymentsRepository.create(data);

    return payment;
  }
}

export default CreatePaymentChequeService;
