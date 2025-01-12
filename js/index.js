const data = 'https://runwayml.com,https://immersivetranslate.com,https://www.deepl.com/translator,https://www.bing.com/chat,https://stability.ai,https://pika.art,https://bard.google.com,https://image.hunyuan.tencent.com,https://hunyuan.tencent.com,https://chat.doltrans.com,https://docs.qq.com/ai/chat/,https://deepmind.google/technologies/gemini,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://kimi.moonshot.cn,https://xinghuo.xfyun.cn,https://chatglm.cn,https://so.csdn.net/chat,https://translate.volcengine.com,https://www.coze.cn,https://klingai.kuaishou.com,https://ai-nav.lzw.me,https://ai-maas.wair.ac.cn,https://www.doubao.com/chat/,https://pangu.huaweicloud.com,https://yiyan.baidu.com,https://www.aippt.cn,https://tongyi.aliyun.com/wanxiang/,https://chat.sensetime.com,https://tongyi.aliyun.com/qianwen,https://www.tiangong.cn,https://www.notion.so,https://ai.360.cn,https://www.writingo.net';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();