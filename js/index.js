const data = 'http://new.cutim.top,https://404find.me,https://chat.e7.work,https://chat-with-me.uniori.xyz,https://chat.chatgptworld.net,https://home.v50.ltd,https://chat.fcc.cm,https://ai.douresources.com,https://freechatgpt.chat,https://carps.ink,https://plus.wxredcover.cn,https://chat.internetip.cn,https://chat.oldwei.com,https://chat.free2gpt.xyz,https://yiyan.baidu.com,https://www.weijiwangluo.com/talk,https://ai.zecoba.cn,https://trychatgp.com,https://www.magicaibot.com/talk,https://aitools.run,https://chat.binjie.site:7777,https://ai.360.cn,https://qianwen.aliyun.com,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();