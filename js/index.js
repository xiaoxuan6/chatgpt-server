const data = 'http://new.cutim.top,https://chat.fcc.cm,https://cham.pub,https://chat.e7.work,https://chat.chatgptworld.net,https://chat.gog.one,https://ai.16661905.xyz,https://aitools.run,https://freechatgpt.chat,https://chat.oldwei.com,https://chat.coolai.vip,https://home.v50.ltd,https://yiyan.baidu.com,https://plus.wxredcover.cn,https://www.weijiwangluo.com/talk,https://chat.free2gpt.xyz,https://www.magicaibot.com/talk,https://ai.zecoba.cn,https://trychatgp.com,https://qianwen.aliyun.com,https://ai-toolbox.codefuture.top,https://ai.360.cn,https://chat.binjie.site:7777,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();