# Common Spreadsheet Format convert utilities
[![Build Status](https://travis-ci.org/eunikitin/csf-convert.svg?branch=master)](https://travis-ci.org/eunikitin/csf-convert)
[![Coverage Status](https://coveralls.io/repos/github/eunikitin/csf-convert/badge.svg?branch=master)](https://coveralls.io/github/eunikitin/csf-convert?branch=master)
[![dependencies Status](https://david-dm.org/eunikitin/csf-convert/status.svg)](https://david-dm.org/eunikitin/csf-convert)
[![devDependencies Status](https://david-dm.org/eunikitin/csf-convert/dev-status.svg)](https://david-dm.org/eunikitin/csf-convert?type=dev)

## Install
```npm install csf-convert```

## Usage
```js
var convert = require('csf-convert');

var sheetData = {
  A1: { t: 's', v: 'A1' },
  C1: { t: 's', v: 'C1' },
  D1: { t: 's', v: 'D1' },
  E1: { t: 's', v: 'E1' },
  A2: { t: 's', v: 'A2' },
  B2: { t: 's', v: 'B2' },
  C2: { t: 's', v: 'C2' },
  E2: { t: 's', v: 'E2' },
  '!ref': 'A1:E2',
};

var aoa = convert(sheetData);
/* result:
[
  [
    { t: 's', v: 'A1' },
    undefined,
    { t: 's', v: 'C1' },
    { t: 's', v: 'D1' },
    { t: 's', v: 'E1' } ],
  [
    { t: 's', v: 'A2' },
    { t: 's', v: 'B2' },
    { t: 's', v: 'C2' },
    undefined,
    { t: 's', v: 'E2' }
  ]
]
 */
```