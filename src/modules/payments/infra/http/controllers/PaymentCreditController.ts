import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePaymentCreditService from '@modules/payments/services/CreatePaymentCreditService';

export default class PaymentCreditController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      pacient_id,
      form_payment,
      amount,
      payment_day,
      quota,
    } = request.body;

    const createPayment = container.resolve(CreatePaymentCreditService);

    const payment = await createPayment.execute({
      pacient_id,
      form_payment,
      amount,
      payment_day,
      quota,
    });

    return response.json(classToClass(payment));
  }
}
