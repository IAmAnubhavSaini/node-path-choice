var nodePath = require('../index');

function add() {
  nodePath.absolute(__filename);
}

function testDirectory () {
  nodePath.absolute(__filename);
  console.log(process.env.NODE_PATH);
}

module.exports = {
  add: add,
  testDirectory: testDirectory
};
