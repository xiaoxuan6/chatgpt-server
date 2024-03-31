const data = 'https://carps.ink,https://www.meout.app,https://chattyaid.com,https://xmind.ai,https://chat.wangyaodi.com,https://home.v50.ltd,https://dusk.chat,https://www.dusk.chat,http://new.cutim.top,https://chat.oldwei.com,https://chat.coolai.vip,https://www.weijiwangluo.com/talk,https://xinghuo.xfyun.cn,https://chatgai.lovepor.cn/?from=lzw,https://plus.wxredcover.cn,https://aigcfun.com,https://so.csdn.net/chat,https://aitools.run,https://ai.zecoba.cn,https://yiyan.baidu.com,https://chatglm.cn,https://qianwen.aliyun.com,https://ai.360.cn,https://chat.binjie.site:7777,https://gpt.nowait.xin/chat,https://ai-toolbox.codefuture.top';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();