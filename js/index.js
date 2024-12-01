const data = 'https://www.deepl.com/translator,https://runwayml.com,https://immersivetranslate.com,https://www.bing.com/chat,https://stability.ai,https://hunyuan.tencent.com,https://pika.art,https://www.notion.so,https://bard.google.com,https://deepmind.google/technologies/gemini,https://image.hunyuan.tencent.com,https://chat.doltrans.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://chatglm.cn,https://tongyi.aliyun.com/wanxiang/,https://www.doubao.com/chat/,https://xinghuo.xfyun.cn,https://so.csdn.net/chat,https://www.coze.cn,https://ai-nav.lzw.me,https://tongyi.aliyun.com/qianwen,https://chat.sensetime.com,https://yiyan.baidu.com,https://ai-maas.wair.ac.cn,https://www.aippt.cn,https://www.tiangong.cn,https://www.writingo.net,https://translate.volcengine.com,https://kimi.moonshot.cn,https://pangu.huaweicloud.com,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();