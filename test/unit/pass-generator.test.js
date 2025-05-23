const {generatePass} = require('../../utils/pass-generator');


jest.mock('crypto-random-string', () => {
  return jest.fn(() => '#Rt8$IK>BYN-`tqc8pOw');
});


describe('generatePass', () => {
  it('it should generate password with Max length of 20', () => {
    const actual = generatePass(20);
    expect(actual.length).toEqual(20);
    expect(actual.length).toBeLessThanOrEqual(20);
  });

  it('it should generate password and should be greater than 8 letters', () => {
    const actual = generatePass(20);
    expect(actual.length).toBeGreaterThanOrEqual(8);
  });

  it('it should generate password and be a base 64', () => {
    const b64it = buffer => buffer.toString('base64');
    const actual = generatePass(20);
    expect(b64it(actual)).toEqual(actual);
  });

  it('it should generate password which include atleast uppercase', () => {
    const actual = [...generatePass(20)].some(char => /[A-Z]/.test(char));
    expect(actual).toBeTruthy();
    expect(actual).toBe(true);
    expect(actual).toEqual(true);
  });

  it('it should generate password which most include lowercase', () => {
    const actual = [...generatePass(20)].some(char => /[a-z]/.test(char));
    expect(actual).toBeTruthy();
    expect(actual).toBe(true);
    expect(actual).toEqual(true);
  });

  it('it should generate password which most include special character', () => {
    const actual = [...generatePass(20)].some(char => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(char));
    expect(actual).toBeTruthy();
    expect(actual).toBe(true);
    expect(actual).toEqual(true);
  });

  it('it should generate password which most include Numeric', () => {
    const actual = [...generatePass(20)].some(char => /\d/.test(char));
    expect(actual).toBeTruthy();
    expect(actual).toBe(true);
    expect(actual).toEqual(true);
  });
});
