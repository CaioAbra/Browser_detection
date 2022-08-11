let browserDetailsRef = document.getElementById('browserType');
let osDetailsRef = document.getElementById('osType');

var browserList = [
    { name: 'Firefox', value: 'Firefox' },
    { name: 'Opera', value: 'Opera' },
    { name: 'Chrome', value: 'Chrome' },
    { name: 'Edge', value: 'Edge' },
    { name: 'Safari', value: 'Safari' }
];

var os = [
    { name: 'Android', value: 'Android' },
    { name: 'IOs', value: 'IOs' },
    { name: 'Linux', value: 'Linux' },
    { name: 'Windows', value: 'Win' },
    { name: 'Macintosh', value: 'Mac' },
    { name: 'Ipad', value: 'Ipad' }
];

let browserChecker = () => {
    let userDetails = navigator.userAgent;
    for (let i in browserList) {
        if (userDetails.includes(browserList[i].value)) {
            browserDetailsRef.innerHTML = browserList[i].name || 'unknown Browser';
            break;
        }
    }

    for (let i in os) {
        if (userDetails.includes(os[i].value)) {
            osDetailsRef.innerHTML = os[i].name;
            break;
        }
    }
};

window.onload = browserChecker();