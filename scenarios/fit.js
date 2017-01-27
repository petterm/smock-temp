const path = require('path');
const utils = require('../utils');
const respFolder = 'responses';

module.exports = [
    /**
     * FIT - SWEDEN - With and without flights
     * - result
     * - searchDone
     * - search
     */
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITseWithoutFlight',
                Result: '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'se', '03-result-withoutFlight.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITseWithFlight',
                Result: '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'se', '03-result-withFlight.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITseWithoutFlight'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'se', '02-search-withoutFlight.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITseWithFlight'
            },
            cookies: {
                'mock-fit-search': '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'se', '02-searchDone-withFlight.json')); },
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
                uuid: 'uuidFITseWithFlight'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'se', '02-search-withFlight.json')); },
            cookies: {
                'mock-fit-search': '1'
            }
        },
    },
    /**
     * FIT - NORWAY - With and without flights
     * - result
     * - searchDone
     * - search
     */
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITnoWithoutFlight',
                Result: '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'no', '03-result-withoutFlight.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITnoWithFlight',
                Result: '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'no', '03-result-withFlight.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITnoWithoutFlight'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'no', '02-search-withoutFlight.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/FIT',
            query: {
                uuid: 'uuidFITnoWithFlight'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', 'no', '02-search-withFlight.json')); }
        },
    },
    /**
     * FIT - With and without flights
     * - start
     */
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
                return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', marketCode, '01-start-withoutFlight.json'));
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
                return utils.getTemplate(path.join(__dirname, respFolder, 'FIT', marketCode, '01-start-withFlight.json'));
            },
        },
    },
];
