'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    this.ctx.body = 'api hi';
  }
  async getArticleList() {

    const sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.add_Time as add_Time,' +
              'article.visit_count as visit_count,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type_Id ';
    const results = await this.app.mysql.query(sql);
    console.log(results);
    this.ctx.body = { data: results };
  }
}
module.exports = HomeController;
