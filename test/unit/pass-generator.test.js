const {generatePass} = require('../../utils/pass-generator');
const config = require('../../config');


// jest.mock('crypto-random-string');
jest.unstable_mockModule('crypto-random-string', () => ({
  default: jest.fn().mockReturnValue('#Rt8$IK>')
}));

describe('generatePass', () => {
  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });

  it('should generate password with Max length of 8', async () => {
    // require('crypto-random-string').default.mockImplementation(() => 'ffffffff');
    // const cryptoRandomString = require('crypto-random-string');
    // cryptoRandomString.mockImplementation(() => '#Rt8$IK>');
    const actual = await generatePass(config.passWrd.length, config.passWrd.type);

    expect(actual.length).toEqual(8);
    // expect(actual.length).toBeLessThanOrEqual(8);
  });


  it('should generate password and be a ASCII', async () => {
    // const cryptoRandomString = await import('crypto-random-string');
    const ascii = buffer => Buffer.from(buffer).toString('ascii');
    // cryptoRandomString.mockImplementation(() => '#Rt8$IK>');
    const actual = await generatePass(config.passWrd.length, config.passWrd.type);
    expect(ascii(actual)).toEqual(actual);
  });

  it('it should generate password which include atleast uppercase', async () => {
    // const cryptoRandomString = await import('crypto-random-string');
    // cryptoRandomString.mockImplementation(() => '#Rt8$IK>');
    const actual = [... await generatePass(config.passWrd.length, config.passWrd.type)]
      .some(char => /[A-Z]/.test(char));
    expect(actual).toEqual(true);
  });

  it('should generate password which most include lowercase', async () => {
    // const cryptoRandomString = await import('crypto-random-string');
    // cryptoRandomString.mockImplementation(() => '#Rt8$IK>');
    const actual = [...await generatePass(config.passWrd.length, config.passWrd.type)]
      .some(char => /[a-z]/.test(char));
    expect(actual).toEqual(true);
  });

  it('should generate password which most include special character', async () => {
    // const cryptoRandomString = await import('crypto-random-string');
    // cryptoRandomString.mockImplementation(() => '#Rt8$IK>');
    const actual =  [...await generatePass(config.passWrd.length, config.passWrd.type)]
      .some(char => /[!#$%&*+=?@]/.test(char));
    expect(actual).toEqual(true);
  });

  it('it should generate password which most include Numeric', async () => {
    // const cryptoRandomString = await import('crypto-random-string');
    // cryptoRandomString.mockImplementation(() => '#Rt8$IK>');
    const actual = [...await generatePass(config.passWrd.length, config.passWrd.type)]
      .some(char => /\d/.test(char));
    expect(actual).toEqual(true);
  });
});
