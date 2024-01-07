const data = 'http://new.cutim.top,https://ai.16661905.xyz,https://chat-with-me.uniori.xyz,https://chat.fcc.cm,https://chat.oldwei.com,https://freechatgpt.chat,https://chat.internetip.cn,https://home.v50.ltd,https://chat.coolai.vip,https://chat.free2gpt.xyz,https://carps.ink,https://plus.wxredcover.cn,https://ai.zecoba.cn,https://yiyan.baidu.com,https://www.magicaibot.com/talk,https://aitools.run,https://ai.360.cn,https://trychatgp.com,https://ai.douresources.com,https://www.weijiwangluo.com/talk,https://qianwen.aliyun.com,https://chat.binjie.site:7777,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();