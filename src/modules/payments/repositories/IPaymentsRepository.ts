import Payment from '@modules/payments/infra/typeorm/entities/Payment';

import ICreatePaymentDTO from '@modules/payments/dtos/ICreatePaymentDTO';
import IFindAllPaymentsInMonthDTO from '@modules/payments/dtos/IFindAllPaymentsInMonthDTO';

export default interface IPaymentsRepository {
  create(data: ICreatePaymentDTO): Promise<Payment>;
  listMonthPayments(data: IFindAllPaymentsInMonthDTO): Promise<Payment[]>;
  findById(id: string): Promise<Payment | undefined>;
  remove(data: Payment): Promise<void>;
}
