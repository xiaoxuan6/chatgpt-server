const data = 'https://www.meout.app,https://chattyaid.com,https://chat.wangyaodi.com,https://www.dusk.chat,https://carps.ink,https://home.v50.ltd,https://xmind.ai,https://dusk.chat,https://chat.coolai.vip,https://chat.oldwei.com,https://www.weijiwangluo.com/talk,https://chatgai.lovepor.cn/?from=lzw,https://plus.wxredcover.cn,https://xinghuo.xfyun.cn,https://so.csdn.net/chat,https://ai.zecoba.cn,https://chatglm.cn,https://aitools.run,https://aigcfun.com,https://yiyan.baidu.com,https://ai.360.cn,https://ai-toolbox.codefuture.top,https://chat.binjie.site:7777,https://gpt.nowait.xin/chat,https://qianwen.aliyun.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();