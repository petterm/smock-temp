const path = require('path');
const utils = require('../utils');
const respFolder = 'responses';

module.exports = [
    /**
     * AirSearch - SWEDEN - Return
     * - check
     * - result
     * - searchDone
     * - search
     */
    {
        request: {
            method: 'GET',
            path: '/AirSearch',
            query: {
                uuid: 'uuidAirSearchseReturn',
                Check: '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'AirSearch', 'se', '00-check-return.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/AirSearch',
            query: {
                uuid: 'uuidAirSearchseReturn',
                Result: '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'AirSearch', 'se', '04-result-return.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/AirSearch',
            query: {
                uuid: 'uuidAirSearchseReturn',
            },
            cookies: {
                'mock-air-search': '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'AirSearch', 'se', '03-searchDone-return.json')); },
            cookies: {
                'mock-air-search': ''
            }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/AirSearch',
            query: {
                uuid: 'uuidAirSearchseReturn'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'AirSearch', 'se', '02-search-return.json')); },
            cookies: {
                'mock-air-search': '1'
            }
        },
    },
    /**
     * AirSearch - Return and Oneway
     * - check (with unknown uuid)
     * - start
     */
    {
        request: {
            method: 'GET',
            path: '/AirSearch',
            query: {
                Check: '1'
            }
        },
        response: {
            data: {"Conflict":"no parameters"}
        },
    },
    {
        request: {
            method: 'GET',
            path: '/AirSearch',
            query: {
                Oneway: '1'
            }
        },
        response: {
            data: (req) => {
                const marketCode = req.query.Market || 'se';
                return utils.getTemplate(path.join(__dirname, respFolder, 'AirSearch', marketCode, '01-start-oneway.json'));
            },
        },
    },
    {
        request: {
            method: 'GET',
            path: '/AirSearch',
        },
        response: {
            data: (req) => {
                if (req.query.uuid) {
                    return {"Error":"No such block available"};
                }
                const marketCode = req.query.Market || 'se';
                return utils.getTemplate(path.join(__dirname, respFolder, 'AirSearch', marketCode, '01-start-return.json'));
            },
        },
    },
];
