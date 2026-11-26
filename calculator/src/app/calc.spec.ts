import { add, divide, multiply, subtract } from './calc';

describe('calc', () => {
  it('add', () => expect(add(2, 3)).toBe(5));
  it('subtract', () => expect(subtract(5, 3)).toBe(2));
  it('multiply', () => expect(multiply(4, 2.5)).toBe(10));
  it('divide', () => expect(divide(9, 3)).toBe(3));
});
