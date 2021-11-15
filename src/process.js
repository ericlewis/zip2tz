const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const tzInts = {
    "America/Adak": 1,
    "America/Anchorage": 2,
    "America/Boise": 3,
    "America/Chicago": 4,
    "America/Denver": 5,
    "America/Detroit": 6,
    "America/Indiana/Indianapolis": 7,
    "America/Indiana/Knox": 8,
    "America/Indiana/Marengo": 9,
    "America/Indiana/Petersburg": 10,
    "America/Indiana/Tell_City": 11,
    "America/Indiana/Vevay": 12,
    "America/Indiana/Vincennes": 13,
    "America/Indiana/Winamac": 14,
    "America/Juneau": 15,
    "America/Kentucky/Louisville": 16,
    "America/Kentucky/Monticello": 17,
    "America/Los_Angeles": 18,
    "America/Menominee": 19,
    "America/Metlakatla": 20,
    "America/New_York": 21,
    "America/Nome": 22,
    "America/North_Dakota/Beulah": 23,
    "America/North_Dakota/Center": 24,
    "America/North_Dakota/New_Salem": 25,
    "America/Phoenix": 26,
    "America/Puerto_Rico": 27,
    "America/Sitka": 28,
    "America/St_Thomas": 29,
    "America/Yakutat": 30,
    "Pacific/Chuuk": 31,
    "Pacific/Guam": 32,
    "Pacific/Honolulu": 33,
    "Pacific/Kosrae": 34,
    "Pacific/Kwajalein": 35,
    "Pacific/Majuro": 36,
    "Pacific/Pago_Pago": 37,
    "Pacific/Palau": 38,
    "Pacific/Pohnpei": 39,
    "Pacific/Saipan": 40,
    "Pacific/Wake": 41,
}

const tzPath = path.resolve(__dirname, "..", "data", "tz.data");
const tzJSONPath = path.resolve(__dirname, "..", "data", "tz.json");

const buffer = fs.readFileSync(tzPath);
const inflatedBuffer = zlib.inflateSync(buffer);

const tz = {};
inflatedBuffer.toString('utf8').split("\n").slice(0, -1).forEach(line => {
    const object = line.split("|");
    const zip = object.shift();
    const timezone = object.shift();
    const int = tzInts[timezone];

    if (!int) {
        throw new Error("Missing tz map");
    }

    return tz[zip] = int;
});

fs.writeFileSync(tzJSONPath, JSON.stringify(tz), { flag: "w+" });