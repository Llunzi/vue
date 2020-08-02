const Mock = require('mockjs');

const { Random } = Mock;
const result = Mock.mock({
  code: 0,
  msg: 'success',
  msgCode: Mock.Random.natural(),
  'data|1': [
    {
      updateFlag: '@boolean',
      integral: Random.natural(0, 20),
    },
  ],
});

module.exports = result;
