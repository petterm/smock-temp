const path = require('path');
const utils = require('../utils');
const respFolder = 'responses';

module.exports = [
    /**
     * SingleBuildingPrice - SWEDEN - Return
     * - result
     * - searchDone
     * - search
     */
    {
        request: {
            method: 'GET',
            path: '/SingleBuildingPrice',
            query: {
                uuid: 'uuidSingleBuildingPricese',
                Result: '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'SingleBuildingPrice', 'se', '04-result.json')); }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/SingleBuildingPrice',
            query: {
                uuid: 'uuidSingleBuildingPricese',
            },
            cookies: {
                'mock-lodging-search': '1'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'SingleBuildingPrice', 'se', '03-searchDone.json')); },
            cookies: {
                'mock-lodging-search': ''
            }
        },
    },
    {
        request: {
            method: 'GET',
            path: '/SingleBuildingPrice',
            query: {
                uuid: 'uuidSingleBuildingPricese'
            }
        },
        response: {
            data: () => { return utils.getTemplate(path.join(__dirname, respFolder, 'SingleBuildingPrice', 'se', '02-search.json')); },
            cookies: {
                'mock-lodging-search': '1'
            }
        },
    },
    /**
     * SingleBuildingPrice
     * - start
     */
    {
        request: {
            method: 'GET',
            path: '/SingleBuildingPrice',
        },
        response: {
            data: (req) => {
                const marketCode = req.query.Market || 'se';
                return utils.getTemplate(path.join(__dirname, respFolder, 'SingleBuildingPrice', marketCode, '01-start.json'));
            },
        },
    },
];
