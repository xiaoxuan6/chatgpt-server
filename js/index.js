const data = 'https://runwayml.com,https://www.notion.so,https://stability.ai,https://pika.art,https://immersivetranslate.com,https://bard.google.com,https://www.bing.com/chat,https://deepmind.google/technologies/gemini,https://www.doubao.com/chat/,https://www.deepl.com/translator,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://chat.sensetime.com,https://hunyuan.tencent.com,https://image.hunyuan.tencent.com,https://www.writingo.net,https://chat.doltrans.com,https://xinghuo.xfyun.cn,https://kimi.moonshot.cn,https://yiyan.baidu.com,https://translate.volcengine.com,https://www.coze.cn,https://ai-nav.lzw.me,https://www.tiangong.cn,https://so.csdn.net/chat,https://tongyi.aliyun.com/wanxiang/,https://tongyi.aliyun.com/qianwen,https://chatglm.cn,https://pangu.huaweicloud.com,https://www.aippt.cn,https://ai-maas.wair.ac.cn,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();