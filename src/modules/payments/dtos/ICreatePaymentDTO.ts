export default interface ICreatePaymentDTO {
  pacient_id: string;
  form_payment:
    | 'Dinheiro'
    | 'Cheque'
    | 'Cartão de débito'
    | 'Cartão de crédito';
  amount: number;
  payment_day: Date;
  agency?: number;
  account?: number;
  name_cheque?: string;
}
