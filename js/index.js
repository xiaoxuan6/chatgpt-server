const data = 'http://new.cutim.top,https://404find.me,https://ai.16661905.xyz,https://chat-with-me.uniori.xyz,https://baxi.rocks,https://chat.gog.one,https://chat.chatgptworld.net,https://chat.leonas.dev,https://www.justrrry.xyz,https://chat.w630.cc,https://chat.kirito.life,https://www.lynngpt.club,https://gpt.toolkit.show,https://chatgpt-next.aab.icu,https://chat.e7.work,https://cham.pub,https://chat.kimwong.me,https://chat.pedroz.app,https://chatgpt.panxox.xyz,https://chatgpt.cly.life,https://freechatgpt.chat,https://yatoooon.ltd,https://home.v50.ltd,https://chat.fcc.cm,https://www.yatoooon.ltd,https://chat.coolai.vip,https://plus.wxredcover.cn,https://chat.oldwei.com,https://qianwen.aliyun.com,https://www.magicaibot.com/talk,https://ai.douresources.com,https://yiyan.baidu.com,https://aitools.run,https://rockyzhong.buzz,https://chat.free2gpt.xyz,https://www.weijiwangluo.com/talk,https://chat.internetip.cn,https://ai.zecoba.cn,https://gpt.nowait.xin/chat,https://trychatgp.com,https://chat.binjie.site:7777,https://ai.360.cn,https://ai-toolbox.codefuture.top';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();