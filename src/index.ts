import {delimiter, dirname} from 'path';

const relative = (fileName: string) => {
  const root = dirname(fileName);
  return blatant(root);
};

const blatant = (setThisPath: string): void => {
  const oldPath = process.env.NODE_PATH || '';
  if (oldPath.indexOf(setThisPath) === -1) {
    process.env.NODE_PATH = setThisPath + delimiter + oldPath;
  }
  require('module')._initPaths();
  return;
};

export {
  relative,
  blatant
};
