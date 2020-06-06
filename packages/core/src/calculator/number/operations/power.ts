import { BinaryOperation } from "@dinero.js/core";

/**
 * Returns an number to the power of an exponent.
 *
 * @param base The base number.
 * @param exponent The exponent to raise the base to.
 *
 * @returns The base to the power of the exponent.
 */
const power: BinaryOperation<number> = (base, exponent) => {
  return base ** exponent;
};

export default power;
