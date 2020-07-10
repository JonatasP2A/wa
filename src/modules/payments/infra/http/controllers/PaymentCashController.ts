import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePaymentCashService from '@modules/payments/services/CreatePaymentCashService';

export default class PaymentCashController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { pacient_id, form_payment, amount, payment_day } = request.body;

    const createPayment = container.resolve(CreatePaymentCashService);

    const payment = await createPayment.execute({
      pacient_id,
      form_payment,
      amount,
      payment_day,
    });

    return response.json(classToClass(payment));
  }
}
