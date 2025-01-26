const data = 'https://stability.ai,https://runwayml.com,https://immersivetranslate.com,https://www.deepl.com/translator,https://pika.art,https://bard.google.com,https://www.bing.com/chat,https://www.notion.so,https://hunyuan.tencent.com,https://deepmind.google/technologies/gemini,https://www.doubao.com/chat/,https://kimi.moonshot.cn,https://chat.doltrans.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://docs.qq.com/ai/chat/,https://xinghuo.xfyun.cn,https://chatglm.cn,https://klingai.kuaishou.com,https://image.hunyuan.tencent.com,https://www.writingo.net,https://tongyi.aliyun.com/wanxiang/,https://so.csdn.net/chat,https://chat.sensetime.com,https://ai-nav.lzw.me,https://pangu.huaweicloud.com,https://ai.360.cn,https://tongyi.aliyun.com/qianwen,https://www.tiangong.cn,https://www.aippt.cn,https://www.coze.cn,https://yiyan.baidu.com,https://ai-maas.wair.ac.cn,https://translate.volcengine.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();