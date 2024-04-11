export interface TokenizationResult {
  maskedCard: string,
  maskedCvv2: string,
  cardType: string,
  last4: string,
  expiryMonth: number,
  expiryYear: number,
  nonce: string
}
