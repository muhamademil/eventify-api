// Generate kode kupon dengan format "VOC" + 3 karakter acak.
// Total 7 karakter, contoh: DISC9A1, DISCXZ3

export function generateVoucherCode(): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";
  
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomPart += characters[randomIndex];
    }
  
    return `VOC${randomPart}`;
  }
  