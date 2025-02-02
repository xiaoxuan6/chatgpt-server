const data = 'https://runwayml.com,https://stability.ai,https://immersivetranslate.com,https://www.bing.com/chat,https://pika.art,https://bard.google.com,https://www.deepl.com/translator,https://deepmind.google/technologies/gemini,https://www.notion.so,https://hunyuan.tencent.com,https://image.hunyuan.tencent.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://chat.doltrans.com,https://kimi.moonshot.cn,https://docs.qq.com/ai/chat/,https://xinghuo.xfyun.cn,https://www.doubao.com/chat/,https://www.writingo.net,https://chat.sensetime.com,https://tongyi.aliyun.com/wanxiang/,https://ai-nav.lzw.me,https://tongyi.aliyun.com/qianwen,https://translate.volcengine.com,https://klingai.kuaishou.com,https://www.tiangong.cn,https://www.coze.cn,https://chatglm.cn,https://yiyan.baidu.com,https://www.aippt.cn,https://pangu.huaweicloud.com,https://ai-maas.wair.ac.cn,https://ai.360.cn,https://so.csdn.net/chat';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();