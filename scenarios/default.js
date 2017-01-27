const path = require('path');
const utils = require('../utils');

const respFolder = 'responses';

module.exports = {
  endpoints: [
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-se-withoutFlight',
          Result: '1'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'se', '03-result-withoutFlight.json')); }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-se-withFlight',
          Result: '1'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'se', '03-result-withFlight.json')); }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-se-withoutFlight'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'se', '02-search-withoutFlight.json')); }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-se-withFlight'
        },
        cookies: {
          'mock-fit-search': '1'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'se', '02-searchDone-withFlight.json')); },
        cookies: {
          'mock-fit-search': ''
        }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-se-withFlight'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'se', '02-search-withFlight.json')); },
        cookies: {
          'mock-fit-search': '1'
        }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-no-withoutFlight',
          Result: '1'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'no', '03-result-withoutFlight.json')); }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-no-withFlight',
          Result: '1'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'no', '03-result-withFlight.json')); }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-no-withoutFlight'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'no', '02-search-withoutFlight.json')); }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          uuid: 'uuid-FIT-no-withFlight'
        }
      },
      response: {
        data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'no', '02-search-withFlight.json')); }
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
        query: {
          WithFlight: '0'
        }
      },
      response: {
        data: (req) => {
          const marketCode = req.query.Market || 'se';
          return utils.getTemplate(path.join(__dirname, respFolder, marketCode, '01-start-withoutFlight.json'));
        },
      },
    },
    {
      request: {
        method: 'GET',
        path: '/FIT',
      },
      response: {
        data: (req) => {
          const marketCode = req.query.Market || 'se';
          return utils.getTemplate(path.join(__dirname, respFolder, marketCode, '01-start-withFlight.json'));
        },
      },
    },
  ],
};
