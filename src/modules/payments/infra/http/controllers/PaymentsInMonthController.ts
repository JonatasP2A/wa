import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListMonthPaymentsService from '@modules/payments/services/ListMonthPaymentsService';

export default class PaymentsInMonthController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { month, year } = request.query;

    const listPayments = container.resolve(ListMonthPaymentsService);

    const payments = listPayments.execute({
      month: Number(month),
      year: Number(year),
    });

    return response.json(classToClass(payments));
  }
}
