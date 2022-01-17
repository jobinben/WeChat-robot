
const request = require('request');
const config = require('../config/index')
// 调用 AI 接口，获取答案
async function getAnswer() {
    return new Promise((resolve, reject) => {
        request.post({
            url: 'http://api.tianapi.com/saylove/index',
            form: {
                key: config.TOKEN
            },
            json: true
        }, function (err, response, body) {
            resolve(body['newslist'][0].content)
        })
    })
}

async function getAnswerRobot(content) {
    return new Promise((resolve, reject) => {
        request.post({
            url: 'http://api.tianapi.com/robot/index',
            form: {
                key: config.TOKEN, 
                question: content
            },
            json: true
        }, function (err, response, body) {
            resolve(body['newslist'][0].reply)
        })
    })
}

module.exports = {
    getAnswer,
    getAnswerRobot
}
