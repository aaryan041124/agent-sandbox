export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => a / b;

export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export const OPERATIONS: Record<Operation, (a: number, b: number) => number> = {
  add,
  subtract,
  multiply,
  divide,
};
