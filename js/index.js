const data = 'https://www.meout.app,https://chat.wangyaodi.com,https://www.dusk.chat,https://xmind.ai,https://dusk.chat,https://chattyaid.com,https://home.v50.ltd,https://chat.coolai.vip,https://chatgai.lovepor.cn/?from=lzw,https://chat.oldwei.com,http://new.cutim.top,https://xinghuo.xfyun.cn,https://www.weijiwangluo.com/talk,https://so.csdn.net/chat,https://aigcfun.com,https://plus.wxredcover.cn,https://mymoss.com.cn/web,https://aitools.run,https://ai.zecoba.cn,https://yiyan.baidu.com,https://chatglm.cn,https://ai.360.cn,https://ai-toolbox.codefuture.top,https://gpt.nowait.xin/chat,https://qianwen.aliyun.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();