export interface TokenizationResult {
  maskedCard: string,
  maskedCvv2: string,
  cardType: string,
  last4: string,
  expiryMonth: number,
  expiryYear: number,
  nonce: string,
  surcharge: object | null, // { type: string ('percent' or 'currency'), value: number }
  binType: string | null // C - Credit Card, D - Debit Card, null - Unknown
}
