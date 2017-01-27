const airSearch = require('./airSearch');
const fit = require('./fit');
const singleBuildingPrice = require('./singleBuildingPrice');

module.exports = {
  endpoints: [].concat(airSearch, fit, singleBuildingPrice),
};
