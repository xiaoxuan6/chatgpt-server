const data = 'https://runwayml.com,https://stability.ai,https://pika.art,https://www.bing.com/chat,https://bard.google.com,https://www.notion.so,https://immersivetranslate.com,https://deepmind.google/technologies/gemini,https://www.deepl.com/translator,https://image.hunyuan.tencent.com,https://hunyuan.tencent.com,https://chat.doltrans.com,https://so.csdn.net/chat,https://xinghuo.xfyun.cn,https://ai-nav.lzw.me,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://tongyi.aliyun.com/wanxiang/,https://yiyan.baidu.com,https://klingai.kuaishou.com,https://www.doubao.com/chat/,https://www.tiangong.cn,https://kimi.moonshot.cn,https://tongyi.aliyun.com/qianwen,https://www.writingo.net,https://chatglm.cn,https://www.coze.cn,https://translate.volcengine.com,https://www.aippt.cn,https://ai-maas.wair.ac.cn,https://pangu.huaweicloud.com,https://ai.360.cn,https://chat.sensetime.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();