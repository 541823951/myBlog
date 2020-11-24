'use strict';

/** @type Egg.EggPlugin */

module.exports = {
  // 其它插件...
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // 其它插件...
};
