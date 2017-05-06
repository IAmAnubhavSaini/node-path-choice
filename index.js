'use strict';

var path = require('path');

function relative (fileName) {
  var root = path.dirname(fileName);
  return blatant(root);
}

function blatant (setThisPath) {
  var oldPath = process.env.NODE_PATH || '';
  if(oldPath.indexOf(setThisPath) === -1) {
      process.env.NODE_PATH = setThisPath + path.delimiter + oldPath;
  }
  require('module')._initPaths();
  return;
}

module.exports = {
  relative: relative,
  blatant: blatant
};
