"use strict";
var nodePath = require('./index');
var pathLib = require('path');
/* global describe it expect beforeEach */
describe('updated path', function () {
    describe('.relative()', function () {
        it('has updated process.env.NODE_PATH', function () {
            nodePath.relative(__filename);
            //@ts-ignore
            var contains = process.env.NODE_PATH.indexOf('node-path-choice') > -1;
            expect(contains).toBeTrue;
        });
        it('duplicate calls don\'t update path', function () {
            nodePath.relative(__filename);
            //@ts-ignore
            var contains = process.env.NODE_PATH.indexOf('node-path-choice') > -1;
            expect(contains).toBeTrue;
            nodePath.relative(__filename);
            nodePath.relative(__filename);
            //@ts-ignore
            var firstIndex = process.env.NODE_PATH.indexOf('node-path-choice');
            //@ts-ignore
            var lastIndex = process.env.NODE_PATH.lastIndexOf('node-path-choice');
            expect(firstIndex === lastIndex).toBe(true);
        });
    });
    describe('.blatant()', function () {
        beforeEach(function () {
            process.env.NODE_PATH = '';
        });
        it('has updated process.env.NODE_PATH', function () {
            nodePath.blatant(pathLib.dirname(__filename)); // should set **/repo-name/src:
            //@ts-ignore
            var contains = process.env.NODE_PATH.indexOf('/src') > -1;
            expect(contains).toBe(true);
        });
        it('duplicate calls don\'t update path', function () {
            nodePath.blatant(pathLib.dirname(__filename)); // should set **/repo-name/src:
            //@ts-ignore
            var contains = process.env.NODE_PATH.indexOf('/src') > -1;
            expect(contains).toBe(true);
            nodePath.blatant(pathLib.dirname(__filename));
            nodePath.blatant(pathLib.dirname(__filename));
            //@ts-ignore
            var firstIndex = process.env.NODE_PATH.indexOf('/spec');
            //@ts-ignore
            var lastIndex = process.env.NODE_PATH.lastIndexOf('/spec');
            expect(firstIndex === lastIndex).toBe(true);
        });
    });
});
//# sourceMappingURL=index.spec.js.map