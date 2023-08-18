let datas = '';
let item = []

function randomData() {
    item = datas.split(';')
    item = item.filter(function (value) {
        return value.trim() !== "";
    });
    let html = '<ul class="flex-list">\n'
    for (let i = 0; i < 24; i++) {
        const data = item[Math.floor(Math.random() * item.length)];
        let soul = data.split(',')
        html += '<li>\n' +
            '<div>' + soul[0] + '</div>\n' +
            '<div>' + soul[1] + '</div>\n' +
            '</li>\n'
    }
    html += '</ul>';

    document.getElementById('content').innerHTML = html
}

function back() {
    window.history.go(-1)
}

// randomData();