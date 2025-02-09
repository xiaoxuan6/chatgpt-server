const data = 'https://runwayml.com,https://immersivetranslate.com,https://stability.ai,https://pika.art,https://www.deepl.com/translator,https://www.notion.so,https://bard.google.com,https://www.bing.com/chat,https://hunyuan.tencent.com,https://deepmind.google/technologies/gemini,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://www.doubao.com/chat/,https://docs.qq.com/ai/chat/,https://kimi.moonshot.cn,https://image.hunyuan.tencent.com,https://chat.doltrans.com,https://so.csdn.net/chat,https://xinghuo.xfyun.cn,https://translate.volcengine.com,https://ai-nav.lzw.me,https://klingai.kuaishou.com,https://tongyi.aliyun.com/wanxiang/,https://ai.360.cn,https://chat.sensetime.com,https://www.tiangong.cn,https://tongyi.aliyun.com/qianwen,https://chatglm.cn,https://ai-maas.wair.ac.cn,https://yiyan.baidu.com,https://www.writingo.net,https://www.coze.cn,https://www.aippt.cn,https://pangu.huaweicloud.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();