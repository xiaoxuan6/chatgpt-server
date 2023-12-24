const data = 'http://new.cutim.top,https://404find.me,https://ai.16661905.xyz,https://chat.fcc.cm,https://home.v50.ltd,https://freechatgpt.chat,https://chat.oldwei.com,https://chat.internetip.cn,https://chat.coolai.vip,https://chat.free2gpt.xyz,https://plus.wxredcover.cn,https://aitools.run,https://www.magicaibot.com/talk,https://ai.douresources.com,https://yiyan.baidu.com,https://ai.zecoba.cn,https://ai.360.cn,https://chat.zhuanjie.ltd,https://trychatgp.com,https://www.weijiwangluo.com/talk,https://qianwen.aliyun.com,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat,https://chat.binjie.site:7777';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();