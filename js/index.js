const data = 'http://new.cutim.top,https://jntm.opengpt88.com,https://freechatgpt.chat,https://chat.fcc.cm,https://chat.coolai.vip,https://home.v50.ltd,https://chat.free2gpt.xyz,https://chat.oldwei.com,https://plus.wxredcover.cn,https://chat.internetip.cn,https://yiyan.baidu.com,https://aitools.run,https://trychatgp.com,https://www.weijiwangluo.com/talk,https://www.magicaibot.com/talk,https://ai.zecoba.cn,https://ai.douresources.com,https://ai.360.cn,https://qianwen.aliyun.com,https://chat.binjie.site:7777,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();