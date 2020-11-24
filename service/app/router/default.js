const { default: Modal } = require('antd/lib/modal/Modal');

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/getArticleList', controller.default.home.getArticleList);
};
