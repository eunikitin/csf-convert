import { expect } from 'chai';

import library from '../../src';

import sheet5x2Data from '../fixtures/5x2-missing/data';
import sheet5x2Aoa from '../fixtures/5x2-missing/data-aoa';

describe('sheetToAoa', () => {
  it('should convert data object to array of arrays', () => {
    expect(library.sheetToAoa(sheet5x2Data)).to.deep.equal([
      sheet5x2Aoa[1],
      sheet5x2Aoa[2],
    ]);
  });
});
