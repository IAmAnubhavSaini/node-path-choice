'use strict';

var path = require('path');

const relative = fileName => {
  var root = path.dirname(fileName);
  return blatant(root);
};

const blatant = setThisPath => {
  var oldPath = process.env.NODE_PATH || '';
  if (oldPath.indexOf(setThisPath) === -1) {
    process.env.NODE_PATH = setThisPath + path.delimiter + oldPath;
  }
  require('module')._initPaths();
  return;
};

module.exports = {
  relative,
  blatant
};
