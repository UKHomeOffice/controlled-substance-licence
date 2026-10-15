export const PCA_WARNING_TEXT_FOR_DBS = "If yes, they must email dflu.dom@homeoffice.gov.uk with their date of birth, DBS reference number, issue date and explicit consent for the Drugs and Firearms Licensing Unit to access this service";
export const PCA_WARNING_TEXT_FOR_CONVICTION = "If you answer ‘Yes’, you must email dflu.dom@homeoffice.gov.uk with details of the employee and their conviction after submitting this form";

export function generatePcaAlphabetString(charSize: string): string {
  if (!/^[+-]?\d+$/.test(charSize)) {
    throw new Error(`Invalid character count: ${charSize}`);
  }
  const length = Number(charSize);
  if (!Number.isSafeInteger(length) || length < 0 || length > 2_147_483_647) {
    throw new Error(`Invalid character count: ${charSize}`);
  }
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}
