/* --- AUTO GENERATED CONFIG --- */
const navConfigs = [
  {
    "id": "btn-1",
    "text": "🎞全国最大交流总群.免费 →",
    "visible": "1",
    "link1": {
      "url": "https://khxm7iv3ws-hhhkg.oss-cn-wulanchabu.aliyuncs.com/uls-2b7pdd-4p/z-xr-u4/tL-Psr?d=iGxzV4c6&e=1&J0WAjeQ=4D4BwiAuCLPQm6&ts=1789405952159",
      "mode": "1",
      "time": ""
    },
    "link2": {
      "url": "https://example.com/new-link-1",
      "mode": "0",
      "time": "2026/10/01 08:00:00"
    }
  },
  {
    "id": "btn-2",
    "text": "🎞 亲测校园免费通道→不一样 →",
    "visible": "1",
    "link1": {
      "url": "https://mr-0ocw87f-bax8np1n6qa.oss-cn-guangzhou.aliyuncs.com/cpha/y-1dza/Updt?d=Ni6qnPs9&e=1&Y4aFnkle=QCYGwKGHM4of&ts=1789405953422",
      "mode": "1",
      "time": ""
    },
    "link2": {
      "url": "https://example.com/new-link-2",
      "mode": "0",
      "time": "2026/10/01 12:00:00"
    }
  },
  {
    "id": "btn-3",
    "text": "🎞 这个最全~各种搞笑视频→",
    "visible": "1",
    "link1": {
      "url": "https://zhn3br4w-n9.oss-cn-wulanchabu.aliyuncs.com/in8el-39no2/va-6pjw6/q-ABjXLcZUi?d=yPnT1MjZ&e=1&eTuXHTT=jmSi2Ay&ts=1789405954720",
      "mode": "1",
      "time": ""
    },
    "link2": {
      "url": "",
      "mode": "0",
      "time": ""
    }
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const menuBox = document.querySelector('.menu');
  if (!menuBox) return;

  // 清空现有的静态按钮，全量由配置渲染
  menuBox.innerHTML = '';

  const now = Date.now();

  navConfigs.forEach(item => {
    // 隐藏状态处理
    if (item.visible === '0') return;

    // 创建按钮元素
    const btn = document.createElement('button');
    btn.id = item.id;
    btn.className = 'btn';
    btn.innerText = item.text;

    // 检查链接有效性的内部函数
    const checkLinkValid = (linkObj) => {
      if (!linkObj || !linkObj.url) return false;
      if (linkObj.mode == '1') return true;
      if (linkObj.mode == '0' && linkObj.time) {
        const targetStamp = new Date(`${linkObj.time.replace(/-/g, '/')} GMT+0800`).getTime();
        return now >= targetStamp;
      }
      return false;
    };

    // 逻辑判定：优先匹配 link2（如到达预设时间），否则回退到 link1
    let targetUrl = '';
    if (checkLinkValid(item.link2)) {
      targetUrl = item.link2.url;
    } else if (checkLinkValid(item.link1)) {
      targetUrl = item.link1.url;
    }

    // 绑定原页面的跳转函数
    btn.onclick = function() {
      if (targetUrl && typeof window.go === 'function') {
        window.go(targetUrl);
      }
    };

    menuBox.appendChild(btn);
  });
});

