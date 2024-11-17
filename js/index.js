const data = 'https://pika.art,https://runwayml.com,https://stability.ai,https://bard.google.com,https://immersivetranslate.com,https://www.deepl.com/translator,https://www.notion.so,https://image.hunyuan.tencent.com,https://www.bing.com/chat,https://deepmind.google/technologies/gemini,https://www.writingo.net,https://chat.doltrans.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://tongyi.aliyun.com/wanxiang/,https://chat.sensetime.com,https://kimi.moonshot.cn,https://so.csdn.net/chat,https://translate.volcengine.com,https://tongyi.aliyun.com/qianwen,https://chatglm.cn,https://www.doubao.com/chat/,https://www.tiangong.cn,https://ai-nav.lzw.me,https://www.aippt.cn,https://xinghuo.xfyun.cn,https://ai-maas.wair.ac.cn,https://ai.360.cn,https://www.coze.cn,https://yiyan.baidu.com,https://pangu.huaweicloud.com,https://hunyuan.tencent.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();