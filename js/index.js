const data = 'https://stability.ai,https://runwayml.com,https://www.notion.so,https://www.bing.com/chat,https://bard.google.com,https://pika.art,https://immersivetranslate.com,https://hunyuan.tencent.com,https://deepmind.google/technologies/gemini,https://www.deepl.com/translator,https://www.doubao.com/chat/,https://chat.sensetime.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://chatgai.lovepor.cn/?from=lzw,https://www.writingo.net,https://ai-maas.wair.ac.cn,https://translate.volcengine.com,https://chatglm.cn,https://image.hunyuan.tencent.com,https://xinghuo.xfyun.cn,https://kimi.moonshot.cn,https://so.csdn.net/chat,https://yiyan.baidu.com,https://tongyi.aliyun.com/wanxiang/,https://ai-nav.lzw.me,https://www.aippt.cn,https://tongyi.aliyun.com/qianwen,https://www.tiangong.cn,https://pangu.huaweicloud.com,https://www.coze.cn,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();