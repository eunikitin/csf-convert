import { expect } from 'chai';

import library from '../../src';

import sheet1x1Data from '../fixtures/1x1/data';
import sheet1x1Aoa from '../fixtures/1x1/data-aoa';

import sheet2x2Data from '../fixtures/2x2/data';
import sheet2x2Aoa from '../fixtures/2x2/data-aoa';

import sheet1x1OffsetData from '../fixtures/1x1-offset/data';
import sheet1x1OffsetAoa from '../fixtures/1x1-offset/data-aoa';

import sheet2x2OffsetData from '../fixtures/2x2-offset/data';
import sheet2x2OffsetAoa from '../fixtures/2x2-offset/data-aoa';

import sheet5x2Data from '../fixtures/5x2/data';
import sheet5x2Aoa from '../fixtures/5x2/data-aoa';

import sheet5x2MissingData from '../fixtures/5x2-missing/data';
import sheet5x2MissingAoa from '../fixtures/5x2-missing/data-aoa';

describe('sheetToAoa', () => {
  describe('1x1', () => {
    it('should convert data object to array of arrays', () => {
      expect(library.sheetToAoa(sheet1x1Data)).to.deep.equal([
        sheet1x1Aoa[1],
      ]);
    });
  });

  describe('2x2', () => {
    it('should convert data object to array of arrays', () => {
      expect(library.sheetToAoa(sheet2x2Data)).to.deep.equal([
        sheet2x2Aoa[1],
        sheet2x2Aoa[2],
      ]);
    });
  });

  describe('1x1 with offset', () => {
    it('should convert data object to array of arrays', () => {
      expect(library.sheetToAoa(sheet1x1OffsetData)).to.deep.equal([
        undefined,
        [undefined, sheet1x1OffsetAoa[2][0]],
      ]);
    });
  });

  describe('2x2 with offset', () => {
    it('should convert data object to array of arrays', () => {
      expect(library.sheetToAoa(sheet2x2OffsetData)).to.deep.equal([
        undefined,
        undefined,
        [undefined, undefined, sheet2x2OffsetAoa[3][0], sheet2x2OffsetAoa[3][1]],
        [undefined, undefined, sheet2x2OffsetAoa[4][0], sheet2x2OffsetAoa[4][1]],
      ]);
    });
  });

  describe('5x2', () => {
    it('should convert data object to array of arrays', () => {
      expect(library.sheetToAoa(sheet5x2Data)).to.deep.equal([
        sheet5x2Aoa[1],
        sheet5x2Aoa[2],
      ]);
    });
  });

  describe('5x2 with missing elements', () => {
    it('should convert data object to array of arrays', () => {
      expect(library.sheetToAoa(sheet5x2MissingData)).to.deep.equal([
        sheet5x2MissingAoa[1],
        sheet5x2MissingAoa[2],
      ]);
    });
  });
});

describe('aoaToSheet', () => {
  describe('1x1', () => {
    it('should convert array of arrays to data object', () => {
      expect(library.aoaToSheet([
        sheet5x2Aoa[1],
        sheet5x2Aoa[2],
      ])).to.deep.equal(sheet5x2Data);
    });
  });

  describe('2x2', () => {
    it('should convert array of arrays to data object', () => {
      expect(library.aoaToSheet([
        sheet5x2Aoa[1],
        sheet5x2Aoa[2],
      ])).to.deep.equal(sheet5x2Data);
    });
  });

  describe('1x1 with offset', () => {
    it('should convert array of arrays to data object', () => {
      expect(library.aoaToSheet([
        sheet5x2Aoa[1],
        sheet5x2Aoa[2],
      ])).to.deep.equal(sheet5x2Data);
    });
  });

  describe('2x2 with offset', () => {
    it('should convert array of arrays to data object', () => {
      expect(library.aoaToSheet([
        sheet5x2Aoa[1],
        sheet5x2Aoa[2],
      ])).to.deep.equal(sheet5x2Data);
    });
  });

  describe('5x2', () => {
    it('should convert array of arrays to data object', () => {
      expect(library.aoaToSheet([
        sheet5x2Aoa[1],
        sheet5x2Aoa[2],
      ])).to.deep.equal(sheet5x2Data);
    });
  });

  describe('5x2 with missing elements', () => {
    it('should convert array of arrays to data object', () => {
      expect(library.aoaToSheet([
        sheet5x2Aoa[1],
        sheet5x2Aoa[2],
      ])).to.deep.equal(sheet5x2Data);
    });
  });
});
