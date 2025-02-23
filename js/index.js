const data = 'https://immersivetranslate.com,https://gemini.google.com,https://runwayml.com,https://www.anthropic.com,https://stability.ai,https://www.deepl.com/translator,https://cloud.google.com/products/gemini/code-assist,https://bard.google.com,https://aivideo.hunyuan.tencent.com,https://yuanbao.tencent.com,https://hunyuan.tencent.com,https://www.notion.so,https://bolt.new,https://www.bing.com/chat,https://pika.art,https://deepmind.google/technologies/gemini,https://image.hunyuan.tencent.com,https://docs.qq.com/ai/chat/,https://kimi.moonshot.cn,https://arc.tencent.com/zh/ai-demos/faceRestoration,https://tongyi.aliyun.com/wanxiang/,https://klingai.kuaishou.com,https://ai-nav.lzw.me,https://xinghuo.xfyun.cn,https://translate.volcengine.com,https://tongyi.aliyun.com/qianwen,https://chatglm.cn,https://kling.kuaishou.com,https://www.coze.cn,https://www.aippt.cn,https://ai.wps.cn,https://so.csdn.net/chat,https://yiyan.baidu.com,https://chat.sensetime.com,https://www.doubao.com/chat/,https://www.tiangong.cn,https://pangu.huaweicloud.com,https://www.writingo.net,https://xiaoyi.huawei.com/chat/,https://ai-maas.wair.ac.cn,https://bot.360.com';

function randomSentence() {
    let soul = data.split(',')
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '" target="_blank">' + url + '</a>';
}

randomSentence();