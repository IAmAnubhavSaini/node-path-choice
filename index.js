'use strict';

var path = require('path');

function relative (fileName) {
  var root = path.dirname(fileName);
  var oldPath = process.env.NODE_PATH || '';
  if(oldPath.indexOf(root) === -1) {
      process.env.NODE_PATH = root + path.delimiter + oldPath;
  }
  require('module')._initPaths();
  return;
}

module.exports = {
  relative: relative
};
