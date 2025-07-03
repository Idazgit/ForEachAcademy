export class excuse {
  constructor(http_code, tag, message) {
    this.http_code = http_code;
    this.tag = tag;
    this.message = message;
  }
  // Première Validation assez basique ensuite dans le controller je rajouterai que http doit etre une suite de chiffre
  isValid() {
    if (!this.http_code || this.http_code.trim() === "") {
      return { valid: false, message: "Le code Http est requis." };
    }
    if (!this.tag || this.tag.trim() === " ") {
      return { valid: false, message: "Le tag ne peut être vide" };
    }
    if (!this.message || this.message.trim() === "") {
      return { valid: false, message: "Un message est attendu" };
    }
    return { valid: true };
  }
}
