'use strict';

module.exports = {
  'about-the-applicants': {
    steps: [
      {
        step: '/how-funded',
        field: 'how-are-you-funded'
      },
      {
        step: '/person-in-charge',
        field: 'person-incharge-details',
        parse: (list, req) => {
          const personInchargeDetails = [
            req.sessionModel.get('person-in-charge-full-name'),
            req.sessionModel.get('person-in-charge-email-address')
          ];
          return personInchargeDetails.join('\n');
        }
      }
    ]
  }
};
