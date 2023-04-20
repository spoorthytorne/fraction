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

class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  multiply(otherFraction) {
    let newNumerator = this.numerator * otherFraction.numerator;
    let newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  }
}

