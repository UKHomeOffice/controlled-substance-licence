const { generateUniqueUsername } = require('../../utils/user-registration');

jest.mock('hof/lib/logger', () => {
  return jest.fn(() => ({
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
  }));
});

describe('generateUniqueUsername', () => {
  it('should generate base username when no lastGeneratedUsername is provided', () => {
    const result = generateUniqueUsername('TechCorp', 'CR1 9RA', null);
    expect(result).toBe('TECHCCR1');
  });

  it('should handle empty lastGeneratedUsername gracefully', () => {
    const result = generateUniqueUsername('TechCorp', 'CR1 9RA', '');
    expect(result).toBe('TECHCCR1');
  });

  it('should append 1 if lastGeneratedUsername is same as baseUsername', () => {
    const result = generateUniqueUsername('TechCorp', 'CR1 9RA', 'TECHCCR1');
    expect(result).toBe('TECHCCR11');
  });

  it('should increment suffix if lastGeneratedUsername has a numeric suffix', () => {
    const result = generateUniqueUsername('TechCorp', 'CR1 9RA', 'TECHCCR12');
    expect(result).toBe('TECHCCR13');
  });

  it('should use full company name if it is shorter than 5 characters', () => {
    const result = generateUniqueUsername('ABC', 'E1 6AN', null);
    expect(result).toBe('ABCE1');
  });

  it('should sanitize company name with special characters and spaces', () => {
    const result = generateUniqueUsername('A&B Logistics Ltd.', 'SW1A 1AA', null);
    expect(result).toBe('ABLOGSW1A');
  });
});
