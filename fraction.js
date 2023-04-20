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


  subtract(otherFraction) {
    const newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
    const newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  }
}

class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  compare(other) {
    const num1 = this.numerator * other.denominator;
    const num2 = other.numerator * this.denominator;
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      return 0;
    }
  }
}
