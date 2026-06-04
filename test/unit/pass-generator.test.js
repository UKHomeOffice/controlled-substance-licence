const {generatePassword, validatePassword} = require('../../utils/pass-generator');
const config = require('../../config');


jest.unstable_mockModule('crypto-random-string', () => ({
  default: jest.fn().mockReturnValue('7pc2yNhp?DPb1Any')
}));


describe('validatePassword', () => {
  it('should return true if password is valid', () => {
    const actual = validatePassword('7pc2yNhp?DPb1Any', 'testuser1');
    expect(actual).toEqual(true);
  });

  it('should return false if password is not valid', () => {
    const actual = validatePassword('#Rt8$I', 'testuser1');
    expect(actual).toEqual(false);
  });

  it('should return false if first character is not a letter or digit', () => {
    const actual = validatePassword('?pc2yNhpDPb17Any', 'testuser1');
    expect(actual).toEqual(false);
  });

  it('should return false if password not contain Uppercase', () => {
    const actual = validatePassword('7pc2ynhp?dpb1any', 'testuser1');
    expect(actual).toEqual(false);
  });

  it('should return false if password not contain Lowercase', () => {
    const actual = validatePassword('7PC2YNHP?DPB1ANY', 'testuser1');
    expect(actual).toEqual(false);
  });

  it('should return false if password not contain ASCII value', () => {
    const actual = validatePassword('7pc2yNhp4DP61Any', 'testuser1');
    expect(actual).toEqual(false);
  });

  it('should return false if password less than 16 character', () => {
    const actual = validatePassword('7pc2yNhp?DPb1An', 'testuser1');
    expect(actual).toEqual(false);
  });

  it('should return false if password is same as username', () => {
    const actual = validatePassword('7pc2yNhp?DPb1Any', '7pc2yNhp?DPb1Any');
    expect(actual).toEqual(false);
  });
});

describe('generatePassword', () => {
  it('should generate password with length of 16', async () => {
    const actual = await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet, 'testuser1');
    expect(actual.length).toEqual(16);
  });

  it('should generate password and be a ASCII', async () => {
    const ascii = buffer => Buffer.from(buffer).toString('ascii');
    const actual = await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet, 'testuser1');
    expect(ascii(actual)).toEqual(actual);
  });

  it('it should generate password which include atleast uppercase',
    async () => {
      const actual = [... await generatePassword(config.keycloak.passwordPolicy.length,
        config.keycloak.passwordPolicy.characterSet, 'testuser1')]
        .some(char => /[A-Z]/.test(char));
      expect(actual).toEqual(true);
    });

  it('should generate password which most include lowercase', async () => {
    const actual = [...await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet, 'testuser1')]
      .some(char => /[a-z]/.test(char));
    expect(actual).toEqual(true);
  });

  it('should generate password which most include special character', async () => {
    const actual = [...await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy, 'testuser1')]
      .some(char => /[@!?=]/.test(char));
    expect(actual).toEqual(true);
  });

  it('it should generate password which most include Numeric', async () => {
    const actual = [...await generatePassword(config.keycloak.passwordPolicy.length,
      config.keycloak.passwordPolicy.characterSet, 'testuser1')]
      .some(char => /\d/.test(char));
    expect(actual).toEqual(true);
  });
});
