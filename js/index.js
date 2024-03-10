const data = 'https://www.meout.app,https://chattyaid.com,https://www.dusk.chat,https://dusk.chat,https://chat.wangyaodi.com,http://new.cutim.top,https://xmind.ai,https://chatgai.lovepor.cn/?from=lzw,https://home.v50.ltd,https://chat.oldwei.com,https://aigcfun.com,https://www.weijiwangluo.com/talk,https://aitools.run,https://ai.zecoba.cn,https://plus.wxredcover.cn,https://carps.ink,https://chat.coolai.vip,https://xinghuo.xfyun.cn,https://chatglm.cn,https://ai.360.cn,https://yiyan.baidu.com,https://qianwen.aliyun.com,https://chat.binjie.site:7777,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat,https://so.csdn.net/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();