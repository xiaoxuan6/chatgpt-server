const data = 'http://new.cutim.top,https://chat.fcc.cm,https://chat.oldwei.com,https://freechatgpt.chat,https://home.v50.ltd,https://www.magicaibot.com/talk,https://qianwen.aliyun.com,https://chat.coolai.vip,https://plus.wxredcover.cn,https://yiyan.baidu.com,https://chat.internetip.cn,https://chat.free2gpt.xyz,https://www.weijiwangluo.com/talk,https://ai.zecoba.cn,https://trychatgp.com,https://aitools.run,https://gpt.nowait.xin/chat,https://ai.360.cn,https://ai.douresources.com,https://chat.binjie.site:7777,https://ai-toolbox.codefuture.top';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();