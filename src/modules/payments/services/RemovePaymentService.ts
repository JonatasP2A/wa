import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';

@injectable()
class RemovePaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const payment = await this.paymentsRepository.findById(id);

    if (!payment) {
      throw new AppError('Pagamento não encontrado.');
    }

    await this.paymentsRepository.remove(payment);
  }
}

export default RemovePaymentService;
