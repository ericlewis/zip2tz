const database = require('../data/tz.json');

exports.lookup = (zipcode) => {
    return database[zipcode] ?? null;
};