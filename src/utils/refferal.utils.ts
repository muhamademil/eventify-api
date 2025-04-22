export function generateReferralCodeFromName(name: string): string {
  const prefix = name.trim().substring(0, 3).toUpperCase();
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // 4 digit
  return `${prefix}${randomNumber}`;
}
