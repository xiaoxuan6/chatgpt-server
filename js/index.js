const data = 'https://www.meout.app,https://carps.ink,https://www.dusk.chat,https://chattyaid.com,https://dusk.chat,https://chat.wangyaodi.com,https://home.v50.ltd,http://new.cutim.top,https://xmind.ai,https://chat.oldwei.com,https://chat.coolai.vip,https://chatgai.lovepor.cn/?from=lzw,https://www.weijiwangluo.com/talk,https://plus.wxredcover.cn,https://so.csdn.net/chat,https://aigcfun.com,https://xinghuo.xfyun.cn,https://ai.zecoba.cn,https://chatglm.cn,https://aitools.run,https://yiyan.baidu.com,https://qianwen.aliyun.com,https://chat.binjie.site:7777,https://ai.360.cn,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();