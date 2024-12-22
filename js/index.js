const data = 'https://runwayml.com,https://stability.ai,https://bard.google.com,https://www.bing.com/chat,https://pika.art,https://immersivetranslate.com,https://www.deepl.com/translator,https://deepmind.google/technologies/gemini,https://www.notion.so,https://hunyuan.tencent.com,https://image.hunyuan.tencent.com,https://chatglm.cn,https://chat.doltrans.com,https://www.coze.cn,https://kimi.moonshot.cn,https://chat.sensetime.com,https://translate.volcengine.com,https://xinghuo.xfyun.cn,https://so.csdn.net/chat,https://ai-nav.lzw.me,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://www.tiangong.cn,https://www.aippt.cn,https://tongyi.aliyun.com/wanxiang/,https://yiyan.baidu.com,https://www.doubao.com/chat/,https://tongyi.aliyun.com/qianwen,https://pangu.huaweicloud.com,https://www.writingo.net,https://ai-maas.wair.ac.cn,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();