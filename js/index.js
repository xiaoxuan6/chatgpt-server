const data = 'https://runwayml.com,https://www.bing.com/chat,https://stability.ai,https://www.notion.so,https://immersivetranslate.com,https://bard.google.com,https://www.deepl.com/translator,https://deepmind.google/technologies/gemini,https://chat.sensetime.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://pika.art,https://chatgai.lovepor.cn/?from=lzw,https://image.hunyuan.tencent.com,https://hunyuan.tencent.com,https://so.csdn.net/chat,https://tongyi.aliyun.com/wanxiang/,https://chatglm.cn,https://www.doubao.com/chat/,https://xinghuo.xfyun.cn,https://yiyan.baidu.com,https://translate.volcengine.com,https://tongyi.aliyun.com/qianwen,https://www.tiangong.cn,https://ai-nav.lzw.me,https://kimi.moonshot.cn,https://www.aippt.cn,https://www.writingo.net,https://pangu.huaweicloud.com,https://www.coze.cn,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();