class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  divide(other) {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Fraction(numerator, denominator);
  }
}
