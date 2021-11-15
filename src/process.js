const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const tzPath = path.resolve(__dirname, "..", "data", "tz.data");
const tzMapPath = path.resolve(__dirname, "..", "src", "map.js");
const tzJSONPath = path.resolve(__dirname, "..", "data", "tz.json");

const buffer = fs.readFileSync(tzPath);
const inflatedBuffer = zlib.inflateSync(buffer);

const tzSet = new Set();
const tz = {};
inflatedBuffer.toString('utf8').split("\n").slice(0, -1).forEach(line => {
    const object = line.split("|");
    const zip = object.shift();
    const timezone = object.shift();
    tzSet.add(timezone);
    
    const int = [...tzSet].indexOf(timezone);

    if (int === undefined) {
        throw new Error("Missing tz map");
    }

    return tz[zip] = int;
});

// codegen for int -> tz string
fs.writeFileSync(tzMapPath, `exports.tzInts = ${JSON.stringify(Object.assign({}, ...Array.from(tzSet, (value, k) => ({ [parseInt(k)]: value }))))};`, { flag: "w+" })

// codegen for zip -> int
fs.writeFileSync(tzJSONPath, JSON.stringify(tz), { flag: "w+" });