import { Router } from 'express';

import PaymentChequeController from '@modules/payments/infra/http/controllers/PaymentChequeController';
import PaymentCashController from '@modules/payments/infra/http/controllers/PaymentCashController';
import PaymentCreditController from '@modules/payments/infra/http/controllers/PaymentCreditController';

import PaymentsInMonthController from '@modules/payments/infra/http/controllers/PaymentsInMonthController';

const paymentsRouter = Router();
const paymentChequeController = new PaymentChequeController();
const paymentCashController = new PaymentCashController();
const paymentCreditController = new PaymentCreditController();
const paymentsInMonthController = new PaymentsInMonthController();

paymentsRouter.post('/cheque', paymentChequeController.create);
paymentsRouter.post('/cash-debit', paymentCashController.create);
paymentsRouter.post('/credit', paymentCreditController.create);
paymentsRouter.get('/', paymentsInMonthController.index);

export default paymentsRouter;
