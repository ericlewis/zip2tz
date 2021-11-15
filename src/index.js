const { tzInts } = require('./map');
const database = require('../data/tz.json');

exports.lookup = (zipcode) => {
    return tzInts[database[zipcode] ?? null] ?? null;
};