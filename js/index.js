const data = 'https://xmind.ai,https://www.meout.app,https://chattyaid.com,https://chat.wangyaodi.com,https://www.dusk.chat,https://dusk.chat,http://new.cutim.top,https://home.v50.ltd,https://chat.oldwei.com,https://chat.coolai.vip,https://chatgai.lovepor.cn/?from=lzw,https://plus.wxredcover.cn,https://www.weijiwangluo.com/talk,https://so.csdn.net/chat,https://xinghuo.xfyun.cn,https://aigcfun.com,https://ai.zecoba.cn,https://yiyan.baidu.com,https://aitools.run,https://chatglm.cn,https://ai.360.cn,https://qianwen.aliyun.com,https://ai-toolbox.codefuture.top,https://chat.binjie.site:7777,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();