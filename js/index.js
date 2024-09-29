const data = 'https://runwayml.com,https://www.notion.so,https://www.deepl.com/translator,https://www.bing.com/chat,https://immersivetranslate.com,https://hunyuan.tencent.com,https://stability.ai,https://bard.google.com,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://chat.sensetime.com,https://pika.art,https://www.doubao.com/chat/,https://chatglm.cn,https://chatgai.lovepor.cn/?from=lzw,https://ai-maas.wair.ac.cn,https://deepmind.google/technologies/gemini,https://tongyi.aliyun.com/wanxiang/,https://kimi.moonshot.cn,https://xinghuo.xfyun.cn,https://tongyi.aliyun.com/qianwen,https://www.aippt.cn,https://www.coze.cn,https://www.tiangong.cn,https://ai-nav.lzw.me,https://yiyan.baidu.com,https://so.csdn.net/chat,https://www.writingo.net,https://pangu.huaweicloud.com,https://translate.volcengine.com,https://ai.360.cn,https://image.hunyuan.tencent.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();