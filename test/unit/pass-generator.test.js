const {generatePassword, validatePassword} = require('../../utils/pass-generator');
const config = require('../../config');


jest.unstable_mockModule('crypto-random-string', () => ({
  default: jest.fn().mockReturnValue('#Rt8$IK6')
}));


describe('validatePassword', () => {
  it('should return true if passward is valid', () => {
    const actual = validatePassword('#Rt8$IK6');
    expect(actual).toEqual(true);
  });

  it('should return false if passward is not valid', () => {
    const actual = validatePassword('#Rt8$I');
    expect(actual).toEqual(false);
  });

  it('should return false if passward not contain Uppercase', () => {
    const actual = validatePassword('#rt8$ik6');
    expect(actual).toEqual(false);
  });

  it('should return false if passward not contain Lowercase', () => {
    const actual = validatePassword('#RT8$IK6');
    expect(actual).toEqual(false);
  });

  it('should return false if passward not contain ASCII value', () => {
    const actual = validatePassword('sRT8yIk6');
    expect(actual).toEqual(false);
  });

  it('should return false if passward more than 8 character', () => {
    const actual = validatePassword('sRT8yIk6hkkkkW');
    expect(actual).toEqual(false);
  });

  it('should return false if passward less than 8 character', () => {
    const actual = validatePassword('sRT8yIk');
    expect(actual).toEqual(false);
  });
});

describe('generatePassword', () => {
  it('should generate password with Max length of 8', async () => {
    const actual = await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet);
    expect(actual.length).toEqual(8);
  });

  it('should generate password and be a ASCII', async () => {
    const ascii = buffer => Buffer.from(buffer).toString('ascii');
    const actual = await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet);
    expect(ascii(actual)).toEqual(actual);
  });

  it('it should generate password which include atleast uppercase',
    async () => {
      const actual = [... await generatePassword(config.keycloak.passwordPolicy.length,
        config.keycloak.passwordPolicy.characterSet)]
        .some(char => /[A-Z]/.test(char));
      expect(actual).toEqual(true);
    });

  it('should generate password which most include lowercase', async () => {
    const actual = [...await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet)]
      .some(char => /[a-z]/.test(char));
    expect(actual).toEqual(true);
  });

  it('should generate password which most include special character', async () => {
    const actual =  [...await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy)]
      .some(char => /[!#$%&*+=?@]/.test(char));
    expect(actual).toEqual(true);
  });

  it('it should generate password which most include Numeric', async () => {
    const actual = [...await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet)]
      .some(char => /\d/.test(char));
    expect(actual).toEqual(true);
  });
});
