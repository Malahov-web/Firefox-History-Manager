// browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log("Hello from the background");

//   browser.tabs.executeScript({
//     file: "content-script.js",
//   });
// });


// ?
// $.post('http://localhost:5000/some-endpoint');


browser.runtime.onMessage.addListener(function () {
    console.log("Hello from the background");

    browser.tabs.executeScript({
        file: "content-script.js",
    });
});

function openMyPage() {
    browser.tabs.create({
        url: "/index.html",
    });
}

/*
Назначает openMyPage() обработчиком клика на кнопку в браузере.
*/
// browser.runtime.onMessage.addListener(beastify);
browser.browserAction.onClicked.addListener(openMyPage);
