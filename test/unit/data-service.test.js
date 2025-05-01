'use strict';

const { getApplicantId } = require('../../utils/data-service');
const Model = require('hof/model');

jest.mock('hof/model');

jest.mock('../../config.js', () => {
  const originalModule = jest.requireActual('../../config.js');
  return {
    ...originalModule,
    saveService: {
      protocol: 'http',
      host: '127.0.0.1',
      port: '5000'
    }
  };
});

describe('getApplicantId', () => {
  beforeAll(() => {
    mockRequest = jest.fn().mockResolvedValue({ data: [{ applicant_id: 'applicant-123' }] });
    Model.mockImplementation(() => {
      return {
        _request: mockRequest
      };
    });
  });

  let hofModelMock;

  beforeEach(() => {
    hofModelMock = new Model();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the applicant ID when the username exists', async () => {
    const result = await getApplicantId('testuser');

    expect(hofModelMock._request).toHaveBeenCalledWith({
      url: expect.stringContaining('/applicants/username/testuser'),
      method: 'GET'
    });
    expect(result).toBe('applicant-123');
  });

  it('should return null when no applicant ID is found', async () => {
    const mockResponse = {
      data: []
    };
    hofModelMock._request.mockResolvedValue(mockResponse);

    const result = await getApplicantId('nonexistentuser');

    expect(hofModelMock._request).toHaveBeenCalledWith({
      url: expect.stringContaining('/applicants/username/nonexistentuser'),
      method: 'GET'
    });
    expect(result).toBeNull();
  });

  it('should throw when the request fails', async () => {
    const mockError = {message: 'Request failed'};
    hofModelMock._request.mockRejectedValue(mockError);

    expect(() => getApplicantId('testuser')).rejects.toThrow(
      'Error retrieving applicant ID: {"message":"Request failed"}'
    );

    expect(hofModelMock._request).toHaveBeenCalledWith({
      url: expect.stringContaining('/applicants/username/testuser'),
      method: 'GET'
    });
  });
});
