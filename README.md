# zip2tz

Simple library for converting a zipcode to a timezone string.

## Installation
node 14+ supported.

### Yarn
```console
yarn add zip2tz
```

### NPM
```console
npm install --save zip2tz
```

## Usage

```javascript
const { lookup } = require('zip2tz');

const tz = lookup('94110');
console.log(tz); // America/Los_Angeles
```

## Supported Time Zones

* America/Adak
* America/Anchorage
* America/Boise
* America/Chicago
* America/Denver
* America/Detroit
* America/Indiana/Indianapolis
* America/Indiana/Knox
* America/Indiana/Marengo
* America/Indiana/Petersburg
* America/Indiana/Tell_City
* America/Indiana/Vevay
* America/Indiana/Vincennes
* America/Indiana/Winamac
* America/Juneau
* America/Kentucky/Louisville
* America/Kentucky/Monticello
* America/Los_Angeles
* America/Menominee
* America/Metlakatla
* America/New_York
* America/Nome
* America/North_Dakota/Beulah
* America/North_Dakota/Center
* America/North_Dakota/New_Salem
* America/Phoenix
* America/Puerto_Rico
* America/Sitka
* America/St_Thomas
* America/Yakutat
* Pacific/Chuuk
* Pacific/Guam
* Pacific/Honolulu
* Pacific/Kosrae
* Pacific/Kwajalein
* Pacific/Majuro
* Pacific/Pago_Pago
* Pacific/Palau
* Pacific/Pohnpei
* Pacific/Saipan
* Pacific/Wake

## Credit

This project uses data from the [Ziptz project](https://github.com/infused/ziptz).
