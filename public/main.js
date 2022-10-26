
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/1.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建div标签
                const div = document.createElement('div')
                // 填写div内容
                div.innerHTML = request.response
                // 插入
                document.body.appendChild(div)
            } else {
                alert('加载html失败')
            }
        }
    };
    request.send();
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status < 300) {
                // 创建style标签
                const style = document.createElement("style")
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert("加载CSS失败")
            }
        }
    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status < 300) {
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }
        }
    }
    request.send()
}
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(element => {
                    const li = document.createElement("li");
                    li.textContent = element.id;
                    xxx.appendChild(li);
                });
                n += 1;
            }
        }
    }
    request.send()
}
