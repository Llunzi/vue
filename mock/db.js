// db.js
const findBanners = require('./data/findBanners');

console.log('findBanners = ', findBanners);

// 通过使用mock.js，来避免手写数据
module.exports = {
  findBanners,
};
