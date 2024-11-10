const data = 'https://runwayml.com,https://stability.ai,https://www.notion.so,https://pika.art,https://www.bing.com/chat,https://www.deepl.com/translator,https://immersivetranslate.com,https://bard.google.com,https://deepmind.google/technologies/gemini,https://image.hunyuan.tencent.com,https://hunyuan.tencent.com,https://www.writingo.net,https://chatglm.cn,https://chat.doltrans.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://www.doubao.com/chat/,https://xinghuo.xfyun.cn,https://www.coze.cn,https://translate.volcengine.com,https://kimi.moonshot.cn,https://chat.sensetime.com,https://ai-nav.lzw.me,https://yiyan.baidu.com,https://www.tiangong.cn,https://so.csdn.net/chat,https://tongyi.aliyun.com/wanxiang/,https://tongyi.aliyun.com/qianwen,https://ai.360.cn,https://www.aippt.cn,https://pangu.huaweicloud.com,https://ai-maas.wair.ac.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();