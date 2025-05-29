const {generatePass} = require('../../utils/pass-generator');
const config = require('../../config');


jest.mock('unique-random', () => ({
  consecutiveUniqueRandom: jest.fn()
}));

jest.mock('crypto-random-string', () => {
  return jest.fn(() => '#Rt8$IK>BYN-`tqc8pOw');
});


describe('generatePass', () => {
  it('should generate password with Max length of 20', () => {
    require('unique-random').consecutiveUniqueRandom.mockImplementation(() => 20);
    const actual = generatePass(config.passWrd.min, config.passWrd.max, config.passWrd.type);
    expect(actual.length).toEqual(20);
    expect(actual.length).toBeLessThanOrEqual(20);
  });


  it('should generate password and should be greater than 8 letters', () => {
    require('unique-random').consecutiveUniqueRandom.mockImplementation(() => 6);
    require('crypto-random-string').mockImplementation(() => '#Rt8$IK>' );
    const actual = generatePass(config.passWrd.min, config.passWrd.max, config.passWrd.type);
    expect(actual.length).toBeGreaterThanOrEqual(8);
    expect(actual.length).toEqual(8);
  });

  it('should generate password and be a ASCII', () => {
    const ascii = buffer => Buffer.from(buffer).toString('ascii');
    const actual = generatePass(config.passWrd.min, config.passWrd.max, config.passWrd.type);
    expect(ascii(actual)).toEqual(actual);
  });

  it('it should generate password which include atleast uppercase', () => {
    const actual = [...generatePass(config.passWrd.min, config.passWrd.max, config.passWrd.type)]
      .some(char => /[A-Z]/.test(char));
    expect(actual).toEqual(true);
  });

  it('should generate password which most include lowercase', () => {
    const actual = [...generatePass(config.passWrd.min, config.passWrd.max, config.passWrd.type)]
      .some(char => /[a-z]/.test(char));
    expect(actual).toEqual(true);
  });

  it('should generate password which most include special character', () => {
    const actual = [...generatePass(config.passWrd.min, config.passWrd.max, config.passWrd.type)]
      .some(char => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(char));
    expect(actual).toEqual(true);
  });

  it('it should generate password which most include Numeric', () => {
    const actual = [...generatePass(config.passWrd.min, config.passWrd.max, config.passWrd.type)]
      .some(char => /\d/.test(char));
    expect(actual).toEqual(true);
  });
});
