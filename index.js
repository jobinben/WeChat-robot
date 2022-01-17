
const { Wechaty } = require('wechaty');
const config = require('./config/index');
const { getAnswer } = require('./service/api')

const contactName = config.CONTACTNAME


// 创建机器人
const bot = new Wechaty({
    name: 'WechatEveryDay',
    puppet: 'wechaty-puppet-padlocal', // 如果有token，记得更换对应的puppet
    puppetOptions: {
        token: config.PADLOCAL_TOKEN
    }
});

// 二维码生成
function onScan(qrcode, status) {
    require('qrcode-terminal').generate(qrcode); // 在console端显示二维码
    const qrcodeImageUrl = [
        'https://api.qrserver.com/v1/create-qr-code/?data=',
        encodeURIComponent(qrcode),
    ].join('');
    console.log(qrcodeImageUrl);
}

// 登录
async function onLogin(user) {
    console.log(`${user}登录了`);
    const date = new Date()
    console.log(`当前时间:${date}`);
}

// 登出
function onLogout(user) {
    console.log(`${user} 已经退出`);
}

// 监听对话
async function onMessage(msg) {
    const contact = msg.talker(); // 发消息人
    const content = msg.text().trim(); // 消息内容
    if (msg.self()) {
        return;
    }
    if (contactName && contact.name() === contactName) {
        const answer = await getAnswer(content);
        msg.say(answer);
    }
}

bot.on('scan', onScan);
bot.on('login', onLogin);
bot.on('logout', onLogout);
bot.on('message', onMessage);

bot
    .start()
    .then(() => console.log('开始登陆微信'))
    .catch((e) => console.error(e));
