const data = 'https://www.meout.app,https://xmind.ai,https://carps.ink,https://chat.wangyaodi.com,https://chattyaid.com,https://home.v50.ltd,http://new.cutim.top,https://chatgai.lovepor.cn/?from=lzw,https://dusk.chat,https://www.dusk.chat,https://chat.oldwei.com,https://www.weijiwangluo.com/talk,https://xinghuo.xfyun.cn,https://plus.wxredcover.cn,https://chat.coolai.vip,https://yiyan.baidu.com,https://so.csdn.net/chat,https://chatglm.cn,https://ai.zecoba.cn,https://aitools.run,https://ai.360.cn,https://chat.binjie.site:7777,https://ai-toolbox.codefuture.top,https://qianwen.aliyun.com,https://gpt.nowait.xin/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();