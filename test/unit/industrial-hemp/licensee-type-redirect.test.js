'use strict';

const sinon = require('sinon');
const Behaviour = require('../../../apps/industrial-hemp/behaviours/licensee-type-redirect');

describe('Behaviour: successHandler', () => {
  let req;
  let res;
  let next;
  let instance;

  beforeEach(() => {
    req = {
      sessionModel: {
        get: sinon.stub()
      },
      baseUrl: '/industrial-hemp' // Mocked base URL
    };

    res = {
      redirect: sinon.stub()
    };

    next = sinon.stub();

    // Mock a base class with the successHandler method
    class Base {
      successHandler() {
        next();
      }
    }

    // Create an instance of the behaviour with the mock base class
    const LicenseTypeRedirect = Behaviour(Base);
    instance = new LicenseTypeRedirect();
  });

  test('should redirect to /licence-holder-details when first-time-licensee is selected and new application', () => {
    req.sessionModel.get
      .withArgs('application-form-type')
      .returns('new-application');
    req.sessionModel.get
      .withArgs('licensee-type')
      .returns('first-time-licensee');

    instance.successHandler(req, res, next);

    expect(
      res.redirect.calledOnceWithExactly(
        '/industrial-hemp/licence-holder-details'
      )
    ).toBe(true);
  });

  test('should redirect to /company-number-changed if existing-licensee-renew and new application', () => {
    req.sessionModel.get
      .withArgs('application-form-type')
      .returns('new-application');
    req.sessionModel.get
      .withArgs('licensee-type')
      .returns('existing-licensee-renew-or-change-site');

    instance.successHandler(req, res, next);

    expect(
      res.redirect.calledOnceWithExactly(
        '/industrial-hemp/company-number-changed'
      )
    ).toBe(true);
  });

  test('should redirect to /why-new-licence for existing-licensee-applying-for-new-site and new application', () => {
    req.sessionModel.get
      .withArgs('application-form-type')
      .returns('new-application');
    req.sessionModel.get
      .withArgs('licensee-type')
      .returns('existing-licensee-applying-for-new-site');

    instance.successHandler(req, res, next);

    expect(
      res.redirect.calledOnceWithExactly('/industrial-hemp/why-new-licence')
    ).toBe(true);
  });

  test('No redirect when no application-form-type is not set to new-application, but next is called', () => {
    req.sessionModel.get
      .withArgs('application-form-type')
      .returns('amend-application');
    req.sessionModel.get
      .withArgs('licensee-type')
      .returns('existing-licensee-applying-for-new-site');

    instance.successHandler(req, res, next);

    expect(res.redirect.called).toBe(false);
    expect(next.calledOnce).toBe(true);
  });
});
