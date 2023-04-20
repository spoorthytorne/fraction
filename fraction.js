class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  add(other) {
    const newNumerator = this.numerator * other.denominator + this.denominator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }
}
