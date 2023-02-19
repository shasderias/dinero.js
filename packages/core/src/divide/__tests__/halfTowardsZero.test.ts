import { calculator } from '@dinero.js/calculator-number';
import * as fc from 'fast-check';

import { halfTowardsZero } from '../halfTowardsZero';

describe('halfTowardsZero', () => {
  describe('decimal factors', () => {
    it('does not round with a positive integer quotient', () => {
      expect(halfTowardsZero(20, 10, calculator)).toBe(2);
    });
    it('does not round with a negative integer quotient', () => {
      expect(halfTowardsZero(-20, 10, calculator)).toBe(-2);
    });
    it('does not round with a zero quotient', () => {
      expect(halfTowardsZero(0, 10, calculator)).toBe(0);
    });
    it('rounds to the nearest integer towards zero with a positive half float', () => {
      expect(halfTowardsZero(15, 10, calculator)).toBe(1);
    });
    it('rounds to the nearest integer towards zero with a negative half float', () => {
      expect(halfTowardsZero(-25, 10, calculator)).toBe(-2);
    });
    it('rounds up with any positive float quotient above half', () => {
      fc.assert(
        fc.property(fc.integer({ min: 6, max: 9 }), (a) => {
          expect(halfTowardsZero(a, 10, calculator)).toBe(1);
        })
      );
    });
    it('rounds down with any negative quotient above half', () => {
      fc.assert(
        fc.property(fc.integer({ min: -9, max: -6 }), (a) => {
          expect(halfTowardsZero(a, 10, calculator)).toBe(-1);
        })
      );
    });
    it('rounds down with any positive float quotient below half', () => {
      fc.assert(
        fc.property(fc.integer({ min: 1, max: 4 }), (a) => {
          expect(halfTowardsZero(a, 10, calculator)).toBe(0);
        })
      );
    });
    it('rounds up with any negative quotient below half', () => {
      fc.assert(
        fc.property(fc.integer({ min: -4, max: -1 }), (a) => {
          expect(halfTowardsZero(a, 10, calculator)).toBe(-0);
        })
      );
    });
  });
  describe('non-decimal factors', () => {
    it('does not round with a positive integer quotient', () => {
      expect(halfTowardsZero(20, 5, calculator)).toBe(4);
    });
    it('does not round with a negative integer quotient', () => {
      expect(halfTowardsZero(-20, 5, calculator)).toBe(-4);
    });
    it('does not round with a zero quotient', () => {
      expect(halfTowardsZero(0, 5, calculator)).toBe(0);
    });
    it('rounds to the nearest integer towards zero with a positive half float', () => {
      expect(halfTowardsZero(3, 2, calculator)).toBe(1);
    });
    it('rounds to the nearest integer towards zero with a negative half float', () => {
      expect(halfTowardsZero(-5, 2, calculator)).toBe(-2);
    });
    it('rounds up with any positive float quotient above half', () => {
      fc.assert(
        fc.property(fc.integer({ min: 3, max: 4 }), (a) => {
          expect(halfTowardsZero(a, 5, calculator)).toBe(1);
        })
      );
    });
    it('rounds down with any negative quotient above half', () => {
      fc.assert(
        fc.property(fc.integer({ min: -4, max: -3 }), (a) => {
          expect(halfTowardsZero(a, 5, calculator)).toBe(-1);
        })
      );
    });
    it('rounds down with any positive float quotient below half', () => {
      fc.assert(
        fc.property(fc.integer({ min: 1, max: 2 }), (a) => {
          expect(halfTowardsZero(a, 5, calculator)).toBe(0);
        })
      );
    });
    it('rounds up with any negative quotient below half', () => {
      fc.assert(
        fc.property(fc.integer({ min: -2, max: -1 }), (a) => {
          expect(halfTowardsZero(a, 5, calculator)).toBe(-0);
        })
      );
    });
  });
});
