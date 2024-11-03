const data = 'https://runwayml.com,https://stability.ai,https://pika.art,https://www.deepl.com/translator,https://www.notion.so,https://www.bing.com/chat,https://bard.google.com,https://immersivetranslate.com,https://hunyuan.tencent.com,https://deepmind.google/technologies/gemini,https://image.hunyuan.tencent.com,https://chat.sensetime.com,https://chat.doltrans.com,https://www.doubao.com/chat/,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://tongyi.aliyun.com/wanxiang/,https://www.coze.cn,https://tongyi.aliyun.com/qianwen,https://so.csdn.net/chat,https://kimi.moonshot.cn,https://chatglm.cn,https://xinghuo.xfyun.cn,https://translate.volcengine.com,https://www.tiangong.cn,https://yiyan.baidu.com,https://www.aippt.cn,https://www.writingo.net,https://ai-nav.lzw.me,https://pangu.huaweicloud.com,https://ai-maas.wair.ac.cn,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();