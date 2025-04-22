export function generateCoupondCode(): string {
  return "CPN" + Math.random().toString(36).substring(2, 8).toUpperCase();
}
