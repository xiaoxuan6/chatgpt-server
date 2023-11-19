const data = 'http://new.cutim.top,https://chat-with-me.uniori.xyz,https://ai.16661905.xyz,https://www.magicaibot.com/talk,https://chat.fcc.cm,https://chat.oldwei.com,https://ai.douresources.com,https://www.weijiwangluo.com/talk,https://chat.coolai.vip,https://chat.internetip.cn,https://freechatgpt.chat,https://home.v50.ltd,https://plus.wxredcover.cn,https://aitools.run,https://yiyan.baidu.com,https://qianwen.aliyun.com,https://chat.free2gpt.xyz,https://ai.zecoba.cn,https://ai.360.cn,https://trychatgp.com,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat,https://chat.binjie.site:7777';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();