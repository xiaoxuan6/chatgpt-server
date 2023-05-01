let soul = [];

function randomSentence() {
    const url = soul[Math.floor(Math.random() * soul.length)];
    document.getElementById('content').innerHTML = '链接地址：<a href="' + url + '">' + url + '</a>';
}

randomSentence();