import { validatePasswordShape } from './validation';

describe('validatePasswordShape', () => {
  it('returns false for passwords that are too short', () => {
    const password = 'short';
    const result = validatePasswordShape(password);
    expect(result).toBe(false);
  });

  it('returns false for passwords without a capital letter', () => {
    const password = 'nocapital123';
    const result = validatePasswordShape(password);
    expect(result).toBe(false);
  });

  it('returns false for passwords without a digit', () => {
    const password = 'noDigit';
    const result = validatePasswordShape(password);
    expect(result).toBe(false);
  });

  it('returns false for passwords without a non-alphanumeric character', () => {
    const password = 'noSpecialChar2';
    const result = validatePasswordShape(password);
    expect(result).toBe(false);
  });

  it('returns true for valid passwords', () => {
    const password = 'ValidPassword1!';
    const result = validatePasswordShape(password);
    expect(result).toBe(true);
  });
});
