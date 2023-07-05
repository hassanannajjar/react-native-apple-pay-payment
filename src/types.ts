export type APayAllowedCardNetworkType =
  | 'amex'
  | 'mastercard'
  | 'visa'
  | 'privatelabel'
  | 'chinaunionpay'
  | 'interac'
  | 'jcb'
  | 'suica'
  | 'cartebancaires'
  | 'idcredit'
  | 'quicpay'
  | 'maestro'
  | 'mir';
export type APayPaymentStatusType = number;

export type APayPaymentSummaryItemType = {
  label: string;
  amount: string;
};

export type APayRequestDataType = {
  merchantIdentifier: string;
  supportedNetworks: APayAllowedCardNetworkType[];
  countryCode: string;
  currencyCode: string;
  paymentSummaryItems: APayPaymentSummaryItemType[];
};
