const data = 'https://stability.ai,https://runwayml.com,https://immersivetranslate.com,https://bard.google.com,https://www.bing.com/chat,https://pika.art,https://deepmind.google/technologies/gemini,https://www.deepl.com/translator,https://www.notion.so,https://hunyuan.tencent.com,https://www.writingo.net,https://image.hunyuan.tencent.com,https://chatglm.cn,https://chat.doltrans.com,https://so.csdn.net/chat,https://xinghuo.xfyun.cn,https://www.doubao.com/chat/,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://tongyi.aliyun.com/wanxiang/,https://translate.volcengine.com,https://tongyi.aliyun.com/qianwen,https://www.coze.cn,https://yiyan.baidu.com,https://ai-nav.lzw.me,https://www.tiangong.cn,https://kimi.moonshot.cn,https://www.aippt.cn,https://pangu.huaweicloud.com,https://ai.360.cn,https://ai-maas.wair.ac.cn,https://chat.sensetime.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();