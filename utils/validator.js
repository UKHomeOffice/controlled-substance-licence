const moment = require('moment');


const currentDate = () => {
  return moment().format('YYYY-MM-DD').toString();
};


module.exports = {
  currentDate
};
