import { getRepository, Repository, Raw } from 'typeorm';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';

import ICreatePaymentDTO from '@modules/payments/dtos/ICreatePaymentDTO';
import IFindAllPaymentsInMonthDTO from '@modules/payments/dtos/IFindAllPaymentsInMonthDTO';

import Payment from '@modules/payments/infra/typeorm/entities/Payment';

class PaymentsRepository implements IPaymentsRepository {
  private ormRepository: Repository<Payment>;

  constructor() {
    this.ormRepository = getRepository(Payment);
  }

  public async create(data: ICreatePaymentDTO): Promise<Payment> {
    const payment = this.ormRepository.create(data);

    await this.ormRepository.save(payment);

    return payment;
  }

  public async listMonthPayments({
    month,
    year,
  }: IFindAllPaymentsInMonthDTO): Promise<Payment[]> {
    const parsedMonth = String(month).padStart(2, '0');

    const payments = await this.ormRepository.find({
      where: {
        payment_day: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}-${year}'`,
        ),
      },
      order: { payment_day: 'DESC' },
    });

    return payments;
  }
}

export default PaymentsRepository;
