const data = 'https://xmind.ai,https://chat.wangyaodi.com,https://www.meout.app,https://www.dusk.chat,https://carps.ink,https://home.v50.ltd,http://new.cutim.top,https://dusk.chat,https://chat.coolai.vip,https://chat.oldwei.com,https://chatgai.lovepor.cn/?from=lzw,https://plus.wxredcover.cn,https://www.weijiwangluo.com/talk,https://xinghuo.xfyun.cn,https://aigcfun.com,https://so.csdn.net/chat,https://ai.zecoba.cn,https://chatglm.cn,https://yiyan.baidu.com,https://aitools.run,https://ai.360.cn,https://ai-toolbox.codefuture.top,https://qianwen.aliyun.com,https://chat.binjie.site:7777,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();