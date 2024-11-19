const { formatDate } = require('../../../utils');

module.exports = {
  'about-the-applicants': {
    steps: [
      {
        step: '/responsible-officer-details',
        field: 'responsible-officer-details',
        parse: (val, req) => {
          const formattedResponsibleOfficerDetails = Array(
            req.sessionModel.get('responsible-officer-fullname'),
            req.sessionModel.get('responsible-officer-email')
          ).join('\n');

          return formattedResponsibleOfficerDetails;
        }
      },
      {
        step: '/responsible-officer-dbs-information',
        field: 'responsible-officer-dbs-information',
        parse: (val, req) => {
          const formattedResponsibleOfficerDBSInfo = Array(
            req.sessionModel.get('responsible-officer-dbs-application-fullname'),
            req.sessionModel.get('responsible-officer-dbs-reference'),
            formatDate(req.sessionModel.get('responsible-officer-dbs-date-of-issue'))
          ).join('\n');

          return formattedResponsibleOfficerDBSInfo;
        }
      },
      {
        step: '/responsible-officer-dbs',
        field: 'responsible-officer-dbs-update-subscription'
      }
    ]
  }
};
