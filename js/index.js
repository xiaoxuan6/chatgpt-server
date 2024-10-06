const data = 'https://runwayml.com,https://www.bing.com/chat,https://www.deepl.com/translator,https://www.notion.so,https://immersivetranslate.com,https://stability.ai,https://bard.google.com,https://hunyuan.tencent.com,https://chat.sensetime.com,https://pika.art,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://www.coze.cn,https://image.hunyuan.tencent.com,https://deepmind.google/technologies/gemini,https://ai-maas.wair.ac.cn,https://www.doubao.com/chat/,https://chatglm.cn,https://chatgai.lovepor.cn/?from=lzw,https://xinghuo.xfyun.cn,https://so.csdn.net/chat,https://yiyan.baidu.com,https://kimi.moonshot.cn,https://tongyi.aliyun.com/wanxiang/,https://tongyi.aliyun.com/qianwen,https://ai-nav.lzw.me,https://www.tiangong.cn,https://www.aippt.cn,https://translate.volcengine.com,https://www.writingo.net,https://pangu.huaweicloud.com,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();