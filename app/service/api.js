'use strict'

const Service = require('egg').Service
class ApiService extends Service {
  // 用户
  async user () {
    const result = {
      code: 0,
      data: 'success'
    }
    return result
  }
}

module.exports = ApiService
