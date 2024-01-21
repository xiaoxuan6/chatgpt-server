const data = 'http://new.cutim.top,https://404find.me,https://chat-with-me.uniori.xyz,https://chat.dofun.tech,https://chat.kirito.life,https://chat.fcc.cm,https://home.v50.ltd,https://chat.oldwei.com,https://freechatgpt.chat,https://plus.wxredcover.cn,https://chat.coolai.vip,https://www.magicaibot.com/talk,https://www.weijiwangluo.com/talk,https://chat.free2gpt.xyz,https://yiyan.baidu.com,https://ai.zecoba.cn,https://trychatgp.com,https://aitools.run,https://ai.360.cn,https://chat.binjie.site:7777,https://qianwen.aliyun.com,https://gpt.nowait.xin/chat,https://ai-toolbox.codefuture.top';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();