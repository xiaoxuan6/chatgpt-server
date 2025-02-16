const data = 'https://immersivetranslate.com,https://runwayml.com,https://www.deepl.com/translator,https://stability.ai,https://bard.google.com,https://deepmind.google/technologies/gemini,https://image.hunyuan.tencent.com,https://hunyuan.tencent.com,https://www.bing.com/chat,https://pika.art,https://www.notion.so,https://www.doubao.com/chat/,https://chat.doltrans.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://docs.qq.com/ai/chat/,https://kimi.moonshot.cn,https://xinghuo.xfyun.cn,https://chatglm.cn,https://ai-nav.lzw.me,https://www.coze.cn,https://klingai.kuaishou.com,https://www.tiangong.cn,https://translate.volcengine.com,https://tongyi.aliyun.com/wanxiang/,https://www.aippt.cn,https://yiyan.baidu.com,https://pangu.huaweicloud.com,https://so.csdn.net/chat,https://tongyi.aliyun.com/qianwen,https://ai.360.cn,https://ai-maas.wair.ac.cn,https://www.writingo.net,https://chat.sensetime.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();