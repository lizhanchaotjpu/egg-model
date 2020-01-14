'use strict'

const Controller = require('egg').Controller
const returnDataJson = require('../common/return')
class ApiController extends Controller {
  // 用户信息
  async user () {
    const { ctx } = this
    const { body } = ctx.request
    let data = {}
    if (body) {
      data = await this.service.api.user(body)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.bodyError
    }
    ctx.body = data
  }
}

module.exports = ApiController
