let nodePath = require('../index');
let pathLib = require('path');

/* global describe it expect beforeEach */

describe('updated path', () => {
  describe('.relative()', () => {
    it('has updated process.env.NODE_PATH', () => {
      nodePath.relative(__filename);
      let contains = process.env.NODE_PATH.indexOf('node-path-choice') > -1;
      expect(contains).toBeTrue;
    });

    it('duplicate calls don\'t update path', () => {
      nodePath.relative(__filename);
      let contains = process.env.NODE_PATH.indexOf('node-path-choice') > -1;
      expect(contains).toBeTrue;
      nodePath.relative(__filename);
      nodePath.relative(__filename);
      let firstIndex = process.env.NODE_PATH.indexOf('node-path-choice');
      let lastIndex = process.env.NODE_PATH.lastIndexOf('node-path-choice');
      expect(firstIndex === lastIndex).toBe(true);
    });
  });
  describe('.blatant()', () => {
    beforeEach(() => {
      process.env.NODE_PATH = '';
    });
    it('has updated process.env.NODE_PATH', () => {
      nodePath.blatant(pathLib.dirname(__filename)); // should set **/node-path-choice/spec:
      let contains = process.env.NODE_PATH.indexOf('node-path-choice/spec') > -1;
      expect(contains).toBe(true);
    });

    it('duplicate calls don\'t update path', () => {
      nodePath.blatant(pathLib.dirname(__filename)); // should set **/node-path-choice/spec:
      let contains = process.env.NODE_PATH.indexOf('node-path-choice/spec') > -1;
      expect(contains).toBe(true);
      nodePath.blatant(pathLib.dirname(__filename));
      nodePath.blatant(pathLib.dirname(__filename));
      let firstIndex = process.env.NODE_PATH.indexOf('node-path-choice/spec');
      let lastIndex = process.env.NODE_PATH.lastIndexOf('node-path-choice/spec');
      expect(firstIndex === lastIndex).toBe(true);
    });
  });
});
