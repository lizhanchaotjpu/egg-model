'use strict'
module.exports = {
  // 格式化时间为秒
  formateTimeToSecond () {
    let tmp = Date.parse(new Date()).toString()
    tmp = tmp.substr(0, 10)
    return tmp
  }
}
