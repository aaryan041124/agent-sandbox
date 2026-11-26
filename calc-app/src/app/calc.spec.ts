import { add, divide, multiply, subtract } from './calc';

describe('calc', () => {
  it('adds', () => expect(add(2, 3)).toBe(5));
  it('subtracts', () => expect(subtract(5, 3)).toBe(2));
  it('multiplies', () => expect(multiply(4, 2.5)).toBe(10));
  it('divides', () => expect(divide(9, 3)).toBe(3));
  it('throws on divide by zero', () => expect(() => divide(1, 0)).toThrow());
});
