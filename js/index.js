const data = 'https://stability.ai,https://runwayml.com,https://www.bing.com/chat,https://bard.google.com,https://pika.art,https://immersivetranslate.com,https://www.notion.so,https://deepmind.google/technologies/gemini,https://www.deepl.com/translator,https://hunyuan.tencent.com,https://chat.sensetime.com,https://image.hunyuan.tencent.com,https://chat.doltrans.com,https://www.writingo.net,https://xinghuo.xfyun.cn,https://www.doubao.com/chat/,https://www.coze.cn,https://yiyan.baidu.com,https://so.csdn.net/chat,https://tongyi.aliyun.com/wanxiang/,https://ai-nav.lzw.me,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://www.tiangong.cn,https://www.aippt.cn,https://tongyi.aliyun.com/qianwen,https://kimi.moonshot.cn,https://chatglm.cn,https://translate.volcengine.com,https://pangu.huaweicloud.com,https://ai-maas.wair.ac.cn,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();