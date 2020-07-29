import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RemovePaymentService from '@modules/payments/services/RemovePaymentService';

export default class RemovePaymentController {
  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removePayment = container.resolve(RemovePaymentService);

    await removePayment.execute(id);

    return response.status(204).send();
  }
}
