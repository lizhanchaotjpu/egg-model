/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_15786270812121212122668_2800'

  // add your middleware config here
  config.middleware = []
  // 服务器侦听配置
  config.cluster = {
    listen: {
      port: 8002,
      hostname: '0.0.0.0'
    }
  }
  // csrf 配置
  config.security = {
    csrf: {
      enable: false
    }
  }
  // 后台api配置
  config.api_server = {
    host: 'www.baidu.com',
    path: '/api/',
    method: 'POST'
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }
  return {
    ...config,
    ...userConfig
  }
}
