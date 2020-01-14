'use strict'

const Controller = require('egg').Controller
const returnDataJson = require('../common/return')
class ApiController extends Controller {
  // 登录
  async login () {
    const { ctx } = this
    const body = ctx.request.body
    let data = {}
    if (body) {
      data = await this.service.api.login(body)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.bodyError
    }
    ctx.body = data
  }
  // 获取账户信息
  async account () {
    const { ctx } = this
    const headers = ctx.request.headers
    let data = {}
    if (headers) {
      data = await this.service.api.account(headers)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.queryError
    }
    ctx.body = data
  }
  // 获取手机号验证码
  async smscode () {
    const { ctx } = this
    const { phoneNum, reset_password } = ctx.request.query
    let data = {}
    if (phoneNum) {
      data = await this.service.api.smscode(phoneNum, reset_password)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.queryError
    }
    if (data.data) {
      if (data.data.smsCode) {
        data.data.smsCode = ''
      }
    }
    ctx.body = data
  }
  // 注册
  async register () {
    const { ctx } = this
    const body = ctx.request.body
    let data = {}
    if (body) {
      data = await this.service.api.register(body)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.bodyError
    }
    ctx.body = data
  }
  // 重置密码
  async resetPwd () {
    const { ctx } = this
    const body = ctx.request.body
    let data = {}
    if (body) {
      data = await this.service.api.resetPwd(body)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.bodyError
    }
    ctx.body = data
  }
  // 获取单位列表
  async organizationlists () {
    const { ctx } = this
    const headers = ctx.request.headers
    let data = {}
    if (headers) {
      data = await this.service.api.organizationlists(headers)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.queryError
    }
    ctx.body = data
  }
  async businessCommonController () {
    const { ctx } = this
    const { body } = ctx.request
    const flagList = ctx.request.path.split('/')
    const flag = flagList[flagList.length - 1]
    let data = {}
    if (body) {
      data = await this.service.api[flag](body)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.bodyError
    }
    ctx.body = data
  }
  async businessController () {
    const { ctx } = this
    const { body } = ctx.request
    const flagList = ctx.request.path.split('/')
    const flag = flagList[flagList.length - 1]
    let data = {}
    if (body) {
      data = await this.service.api.businessService(body, flag)
    } else {
      data.code = returnDataJson.returnDataCode.error
      data.message = returnDataJson.returnDataMessage.bodyError
    }
    ctx.body = data
  }
}

module.exports = ApiController
