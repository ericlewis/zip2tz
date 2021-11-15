const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const tzPath = path.resolve(__dirname, "..", "data", "tz.data");
const tzJSONPath = path.resolve(__dirname, "..", "data", "tz.json");

const buffer = fs.readFileSync(tzPath);
const inflatedBuffer = zlib.inflateSync(buffer);

const tz = {};
inflatedBuffer.toString('utf8').split("\n").slice(0, -1).forEach(line => {
    const object = line.split("|");
    return tz[object.shift()] = object.shift();
});

fs.writeFileSync(tzJSONPath, JSON.stringify(tz), { flag: "w+" });