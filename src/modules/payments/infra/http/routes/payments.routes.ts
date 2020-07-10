import { Router } from 'express';

import PaymentChequeController from '@modules/payments/infra/http/controllers/PaymentChequeController';
import PaymentCashController from '@modules/payments/infra/http/controllers/PaymentCashController';
import PaymentCreditController from '@modules/payments/infra/http/controllers/PaymentCreditController';

const paymentsRouter = Router();
const paymentChequeController = new PaymentChequeController();
const paymentCashController = new PaymentCashController();
const paymentCreditController = new PaymentCreditController();

paymentsRouter.post('/cheque', paymentChequeController.create);
paymentsRouter.post('/cash-debit', paymentCashController.create);
paymentsRouter.post('/credit', paymentCreditController.create);

export default paymentsRouter;
