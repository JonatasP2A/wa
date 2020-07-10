import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePaymentChequeService from '@modules/payments/services/CreatePaymentChequeService';

export default class PaymentChequeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      pacient_id,
      form_payment,
      amount,
      payment_day,
      agency,
      account,
      name_cheque,
    } = request.body;

    const createPayment = container.resolve(CreatePaymentChequeService);

    const payment = await createPayment.execute({
      pacient_id,
      form_payment,
      amount,
      payment_day,
      agency,
      account,
      name_cheque,
    });

    return response.json(classToClass(payment));
  }
}
