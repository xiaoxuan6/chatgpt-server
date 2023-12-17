const data = 'http://new.cutim.top,https://chat.chatgptworld.net,https://ai.16661905.xyz,https://chatgpt123.fyi,https://chat.fcc.cm,https://freechatgpt.chat,https://www.magicaibot.com/talk,https://home.v50.ltd,https://chat.coolai.vip,https://chat.oldwei.com,https://plus.wxredcover.cn,https://chat.internetip.cn,https://chat.free2gpt.xyz,https://aitools.run,https://yiyan.baidu.com,https://www.weijiwangluo.com/talk,https://ai.zecoba.cn,https://trychatgp.com,https://ai-toolbox.codefuture.top,https://chat.binjie.site:7777,https://ai.douresources.com,https://ai.360.cn,https://gpt.nowait.xin/chat,https://qianwen.aliyun.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();