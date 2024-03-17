const data = 'https://www.meout.app,https://xmind.ai,https://chat.wangyaodi.com,https://www.dusk.chat,https://carps.ink,https://dusk.chat,https://chattyaid.com,https://home.v50.ltd,http://new.cutim.top,https://chat.oldwei.com,https://plus.wxredcover.cn,https://chatgai.lovepor.cn/?from=lzw,https://chat.coolai.vip,https://aigcfun.com,https://www.weijiwangluo.com/talk,https://so.csdn.net/chat,https://xinghuo.xfyun.cn,https://ai.zecoba.cn,https://aitools.run,https://chatglm.cn,https://yiyan.baidu.com,https://qianwen.aliyun.com,https://ai.360.cn,https://ai-toolbox.codefuture.top,https://chat.binjie.site:7777,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();