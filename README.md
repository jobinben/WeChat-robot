# WeChat-robot
2022年最新的可运行的简易版微信机器人，用来都逗女朋友开心的神器。
<p>
这是一个基于Node环境和wechaty的微信机器人。之前由于wechaty升级，可以进行桌面版协议的微信机器人，现在微信的桌面版协议已经不给登录了。
</p>
<h2>非网页版登录</h2>
<p>现在只能换回web协议，，使用puppet-payLocal的token进行登录。你可以申请Wechaty 的ipad local协议的token可以免费试用7天 。</p>
申请地址: [https://github.com/padlocal/wechaty-puppet-padlocal] (https://github.com/padlocal/wechaty-puppet-padlocal)


# 启动

在执行`npm install`安装依赖前，先设置一下npm的镜像，因为需要安装 `chromium`这玩意，而且它很大140M左右。

```bash
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
npm config set puppeteer_download_host https://npm.taobao.org/mirrors
```

安装完依赖后启动。
```bash
npm install
npm run start
```

# 配置

在config/index.js下配置`天行机器人的token`和`padlocal token`以及其他的配置。
```js
module.exports = {
    CONTACTNAME: 'Jobin', // 女朋友的微信昵称（不是备注昵称）
    TOKEN: 'xxx',   // 填写天行机器人的token
    PADLOCAL_TOKEN: 'xxx' // 填写padlocal的token
}
```

天行api申请`土味情话`接口: [https://www.tianapi.com/apiview/80](https://www.tianapi.com/apiview/80)

# 报错&问题

1. `node`版本要在 `>= 12/14, 不要超过14的版本
2. 关于`npm ERR! gyp ERR! stack Error: Could not find any Visual Studio installation to use`的报错, 造成这个原因是电脑上的vs工具有几个版本， 需要安装一下这个:
```bash
npm install --global --production windows-build-tools
```

3. 如果问题2.未解决，可以尝试一下，设置一下vs的版本，看你的vs版本是多少的，如我的vs版本是2019，所以执行:
```bash
npm config set msvs_version 2019
```




