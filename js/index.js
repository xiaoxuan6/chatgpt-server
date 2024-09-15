const data = 'https://runwayml.com,https://www.deepl.com/translator,https://www.bing.com/chat,https://www.heygen.com,https://immersivetranslate.com,https://stability.ai,https://www.notion.so,https://bard.google.com,https://hunyuan.tencent.com,https://pika.art,https://image.hunyuan.tencent.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://chat.sensetime.com,https://deepmind.google/technologies/gemini,https://chatglm.cn,https://chatgai.lovepor.cn/?from=lzw,https://www.coze.cn,https://ai-maas.wair.ac.cn,https://tongyi.aliyun.com/qianwen,https://translate.volcengine.com,https://xinghuo.xfyun.cn,https://tongyi.aliyun.com/wanxiang/,https://yiyan.baidu.com,https://www.aippt.cn,https://ai-nav.lzw.me,https://www.tiangong.cn,https://pangu.huaweicloud.com,https://www.writingo.net,https://so.csdn.net/chat,https://ai.360.cn,https://www.doubao.com/chat/,https://kimi.moonshot.cn';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();