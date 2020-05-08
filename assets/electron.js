window.nodeRequire = require;
delete window.require;
delete window.exports;
delete window.module;

const F12 = 123;
const F5 = 116;
const remote = nodeRequire('electron').remote;

document.addEventListener("keydown", function (e) {
    if (e.which === F12) {
        remote.getCurrentWindow().toggleDevTools()
    } else if (e.which === F5) {
        location.reload();
    }
});

// const shell = nodeRequire('electron').shell;

// document.addEventListener('click', function (ev) {
//     const href = ev.target.href;
//     console.log('on click', this, this.href, ev.target, ev.target.href);
//     if (/^https?:\/\//.test(href)) {
//         ev.preventDefault();
//         shell.openExternal(href);
//     }
// });