class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  subtract(otherFraction) {
    const newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
    const newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  }
}
