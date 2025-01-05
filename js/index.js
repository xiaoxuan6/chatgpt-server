const data = 'https://runwayml.com,https://immersivetranslate.com,https://stability.ai,https://www.bing.com/chat,https://www.deepl.com/translator,https://www.notion.so,https://bard.google.com,https://pika.art,https://deepmind.google/technologies/gemini,https://chat.doltrans.com,https://image.hunyuan.tencent.com,https://hunyuan.tencent.com,https://www.doubao.com/chat/,https://chatglm.cn,https://chat.sensetime.com,https://translate.volcengine.com,https://so.csdn.net/chat,https://kimi.moonshot.cn,https://docs.qq.com/ai/chat/,https://klingai.kuaishou.com,https://xinghuo.xfyun.cn,https://ai-nav.lzw.me,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://tongyi.aliyun.com/wanxiang/,https://www.aippt.cn,https://www.tiangong.cn,https://ai-maas.wair.ac.cn,https://tongyi.aliyun.com/qianwen,https://yiyan.baidu.com,https://pangu.huaweicloud.com,https://www.coze.cn,https://ai.360.cn,https://www.writingo.net';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();