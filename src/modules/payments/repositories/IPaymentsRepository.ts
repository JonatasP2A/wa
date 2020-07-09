import Payment from '@modules/payments/infra/typeorm/entities/Payment';

import ICreatePaymentDTO from '@modules/payments/dtos/ICreatePaymentDTO';

export default interface IPaymentsRepository {
  create(data: ICreatePaymentDTO): Promise<Payment>;
}
