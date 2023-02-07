





// /******/ (() => { // webpackBootstrap
//     var __webpack_exports__ = {};
//     /*!***************************!*\
//       !*** ./src/background.js ***!
//       \***************************/
//     function openMyPage() {
//         browser.tabs.create({
//             "url": "/index.html"
//         });
//     }

//     function onVisited(historyItem) {
//         if (historyItem.url == browser.runtime.getURL("./index.html")) {
//             browser.history.deleteUrl({
//                 url: historyItem.url
//             });
//         }
//     }

//     browser.browserAction.onClicked.addListener(openMyPage);
//     browser.history.onVisited.addListener(onVisited);
//     browser.commands.onCommand.addListener(command => {
//         if (command === "open-better-history") {
//             openMyPage();
//         }
//     }); // dev only
//     //openMyPage();
//     /******/
// })()
//     ;
// //# sourceMappingURL=background.js.map






function openMyPage() {
    browser.tabs.create({
        "url": "/index.html"
    });
}

// function onVisited(historyItem) {
//     if (historyItem.url == browser.runtime.getURL("./index.html")) {
//         browser.history.deleteUrl({
//             url: historyItem.url
//         });
//     }
// }

/*
Назначает beastify() обработчиком сообщений расширения.
*/
// browser.runtime.onMessage.addListener(beastify);
browser.browserAction.onClicked.addListener(openMyPage);
// browser.history.onVisited.addListener(onVisited);



