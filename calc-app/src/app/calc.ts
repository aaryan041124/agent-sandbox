export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;

/** Mirrors Python's ZeroDivisionError behaviour by throwing. */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};

export const OPERATIONS: Record<Operation, (a: number, b: number) => number> = {
  add,
  subtract,
  multiply,
  divide,
};
