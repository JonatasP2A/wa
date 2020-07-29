import { Router } from 'express';

import PaymentChequeController from '@modules/payments/infra/http/controllers/PaymentChequeController';
import PaymentCashController from '@modules/payments/infra/http/controllers/PaymentCashController';
import PaymentCreditController from '@modules/payments/infra/http/controllers/PaymentCreditController';
import PaymentsInMonthController from '@modules/payments/infra/http/controllers/PaymentsInMonthController';
import RemovePaymentController from '@modules/payments/infra/http/controllers/RemovePaymentController';

const paymentsRouter = Router();
const paymentChequeController = new PaymentChequeController();
const paymentCashController = new PaymentCashController();
const paymentCreditController = new PaymentCreditController();
const paymentsInMonthController = new PaymentsInMonthController();
const removePaymentController = new RemovePaymentController();

paymentsRouter.post('/cheque', paymentChequeController.create);
paymentsRouter.post('/cash-debit', paymentCashController.create);
paymentsRouter.post('/credit', paymentCreditController.create);
paymentsRouter.get('/', paymentsInMonthController.show);
paymentsRouter.delete('/:id', removePaymentController.remove);

export default paymentsRouter;
