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
