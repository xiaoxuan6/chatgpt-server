const data = 'http://new.cutim.top,https://404find.me,https://chat-with-me.uniori.xyz,https://chat.e7.work,https://chat.chatgptworld.net,https://home.v50.ltd,https://chat.fcc.cm,https://www.magicaibot.com/talk,https://freechatgpt.chat,https://chat.oldwei.com,https://plus.wxredcover.cn,https://chat.free2gpt.xyz,https://yiyan.baidu.com,https://chat.coolai.vip,https://qianwen.aliyun.com,https://chat.internetip.cn,https://ai.zecoba.cn,https://trychatgp.com,https://aitools.run,https://ai.360.cn,https://www.weijiwangluo.com/talk,https://chat.binjie.site:7777,https://ai.douresources.com,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();