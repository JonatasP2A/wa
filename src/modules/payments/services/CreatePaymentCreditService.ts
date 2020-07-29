import { inject, injectable } from 'tsyringe';
import { add } from 'date-fns';

import AppError from '@shared/errors/AppError';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';
import IPacientsRepository from '@modules/pacients/repositories/IPacientsRepository';

import Payment from '@modules/payments/infra/typeorm/entities/Payment';

interface IRequest {
  pacient_id: string;
  form_payment: 'Cartão de crédito';
  amount: number;
  payment_day: Date;
  quota: number;
}

@injectable()
class CreatePaymentCreditService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,

    @inject('PacientRepository')
    private pacientRepository: IPacientsRepository,
  ) {}

  public async execute({
    pacient_id,
    form_payment,
    payment_day,
    amount,
    quota,
  }: IRequest): Promise<Payment[]> {
    if (!pacient_id) {
      throw new AppError('Paciente não informado');
    }

    const checkPacientExists = await this.pacientRepository.findById(
      pacient_id,
    );

    if (!checkPacientExists) {
      throw new AppError('Paciente não cadastrado');
    }

    if (form_payment !== 'Cartão de crédito') {
      throw new AppError('Forma de pagamento incorreta');
    }

    const formatedData = new Date(payment_day);

    const payments = [];

    for (let i = 0; i < quota; i++) {
      const result = add(formatedData, { months: i });
      const payment = await this.paymentsRepository.create({
        pacient_id,
        form_payment,
        payment_day: result,
        amount: amount / quota,
      });
      payments.push(payment);
    }

    return payments;
  }
}

export default CreatePaymentCreditService;
