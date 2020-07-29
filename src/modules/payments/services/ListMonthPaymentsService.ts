import { inject, injectable } from 'tsyringe';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';

import IFindAllPaymentsInMonthDTO from '@modules/payments/dtos/IFindAllPaymentsInMonthDTO';

import Payment from '@modules/payments/infra/typeorm/entities/Payment';

@injectable()
class ListMonthPaymentsService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute({
    month,
    year,
  }: IFindAllPaymentsInMonthDTO): Promise<Payment[]> {
    const payments = await this.paymentsRepository.listMonthPayments({
      month,
      year,
    });

    return payments;
  }
}

export default ListMonthPaymentsService;
