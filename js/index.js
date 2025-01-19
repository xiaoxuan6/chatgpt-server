const data = 'https://immersivetranslate.com,https://runwayml.com,https://stability.ai,https://bard.google.com,https://www.deepl.com/translator,https://www.bing.com/chat,https://pika.art,https://www.notion.so,https://hunyuan.tencent.com,https://deepmind.google/technologies/gemini,https://chat.sensetime.com,https://docs.qq.com/ai/chat/,https://image.hunyuan.tencent.com,https://tongyi.aliyun.com/wanxiang/,https://chat.doltrans.com,https://chatglm.cn,https://tongyi.aliyun.com/qianwen,https://ai-nav.lzw.me,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://xinghuo.xfyun.cn,https://so.csdn.net/chat,https://klingai.kuaishou.com,https://yiyan.baidu.com,https://kimi.moonshot.cn,https://www.doubao.com/chat/,https://www.coze.cn,https://translate.volcengine.com,https://www.tiangong.cn,https://www.aippt.cn,https://pangu.huaweicloud.com,https://www.writingo.net,https://ai-maas.wair.ac.cn,https://ai.360.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();