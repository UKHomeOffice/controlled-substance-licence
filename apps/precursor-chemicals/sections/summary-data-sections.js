module.exports = {
  'about-the-applicants': {
    steps: [
      {
        step: '/licence-holder-details',
        field: 'licence-holder-details',
        parse: (list, req) => {
          const licenseHolderDetails = [];
          licenseHolderDetails.push(req.sessionModel.get('company-name'));
          if (req.sessionModel.get('company-number')) {
            licenseHolderDetails.push(req.sessionModel.get('company-number').toUpperCase());
          }
          licenseHolderDetails.push(req.sessionModel.get('telephone'));
          licenseHolderDetails.push(req.sessionModel.get('email'));
          if (req.sessionModel.get('website-url')) {
            licenseHolderDetails.push(req.sessionModel.get('website-url'));
          }
          return licenseHolderDetails.join('\n');
        }
      },
      {
        step: '/licence-holder-address',
        field: 'licence-holder-address',
        parse: (list, req) => {
          const licenceHolderAddress = [];
          licenceHolderAddress.push(req.sessionModel.get('licence-holder-address-line-1'));
          if (req.sessionModel.get('licence-holder-address-line-2')) {
            licenceHolderAddress.push(req.sessionModel.get('licence-holder-address-line-2'));
          }
          licenceHolderAddress.push(req.sessionModel.get('licence-holder-town-or-city'));
          licenceHolderAddress.push(req.sessionModel.get('licence-holder-postcode'));
          return licenceHolderAddress.join('\n');
        }
      }
    ]
  }
};
