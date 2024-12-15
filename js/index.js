const data = 'https://runwayml.com,https://stability.ai,https://pika.art,https://www.bing.com/chat,https://bard.google.com,https://www.notion.so,https://immersivetranslate.com,https://deepmind.google/technologies/gemini,https://image.hunyuan.tencent.com,https://hunyuan.tencent.com,https://www.deepl.com/translator,https://www.doubao.com/chat/,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://chat.doltrans.com,https://kimi.moonshot.cn,https://xinghuo.xfyun.cn,https://tongyi.aliyun.com/wanxiang/,https://www.coze.cn,https://translate.volcengine.com,https://ai-nav.lzw.me,https://so.csdn.net/chat,https://www.tiangong.cn,https://tongyi.aliyun.com/qianwen,https://chatglm.cn,https://yiyan.baidu.com,https://www.aippt.cn,https://ai.360.cn,https://ai-maas.wair.ac.cn,https://pangu.huaweicloud.com,https://www.writingo.net,https://chat.sensetime.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();