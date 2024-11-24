const data = 'https://runwayml.com,https://stability.ai,https://www.bing.com/chat,https://www.notion.so,https://immersivetranslate.com,https://pika.art,https://bard.google.com,https://www.deepl.com/translator,https://www.doubao.com/chat/,https://hunyuan.tencent.com,https://www.writingo.net,https://deepmind.google/technologies/gemini,https://image.hunyuan.tencent.com,https://chat.doltrans.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://translate.volcengine.com,https://xinghuo.xfyun.cn,https://so.csdn.net/chat,https://chat.sensetime.com,https://kimi.moonshot.cn,https://tongyi.aliyun.com/wanxiang/,https://www.tiangong.cn,https://chatglm.cn,https://ai-nav.lzw.me,https://yiyan.baidu.com,https://tongyi.aliyun.com/qianwen,https://www.aippt.cn,https://www.coze.cn,https://ai-maas.wair.ac.cn,https://pangu.huaweicloud.com,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();