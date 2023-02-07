
// /*
// beastify():
// * удаляет каждый узел в document.body,
// * затем вставляет выбранного зверя
// * затем удаляется как обработчик
// */
// function beastify(request, sender, sendResponse) {
//     removeEverything();
//     insertBeast(request.beastURL);
//     browser.runtime.onMessage.removeListener(beastify);
// }

// /*
// Удаляет каждый узел в document.body
// */
// function removeEverything() {
//     while (document.body.firstChild) {
//         document.body.firstChild.remove();
//     }
// }

// /*
// Учитывая URL изображения зверя, создаёт и стилизует узел IMG,
// указывающий на это изображение, затем вставляет узел в документ.
// */
// function insertBeast(beastURL) {
//     var beastImage = document.createElement("img");
//     beastImage.setAttribute("src", beastURL);
//     beastImage.setAttribute("style", "width: 100vw");
//     // beastImage.setAttribute("style", "height: 100vh");
//     beastImage.setAttribute("style", "height: 50vh");
//     document.body.appendChild(beastImage);
// }

// /*
// Назначает beastify() обработчиком сообщений расширения.
// */
// // browser.runtime.onMessage.addListener(beastify);


// browser.runtime.onMessage.addListener(beastify);








console.log('main.js is on the run!');




// let historyObj = browser.history.search(
//     query                  // object
//   )

// let historyObj = browser.history.search({ text: "" })




// let historyObj = browser.history;


console.log('historyObj:');
// console.log(historyObj);
// console.log(browser.history);
console.log(browser);




// example.1
// function onGot(historyItems) {
//     for (const item of historyItems) {
//         console.log(item.url);
//         console.log(new Date(item.lastVisitTime));
//     }
// }

// browser.history.search({ text: "" }).then(onGot);



// example.2
// function onGot(historyItems) {
//     for (const item of historyItems) {
//         console.log(item.url);
//         // console.log(new Date(item.lastVisitTime));
//     }
// }

// browser.history // ERROR
//     .search({
//         text: "",
//         startTime: 0,
//     })
//     .then(onGot);




// example.3
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/getVisits
// function gotVisits(visits) {
//     console.log(`Visit count: ${visits.length}`);
//     for (const visit of visits) {
//         console.log(visit.visitTime);
//     }
// }

// function listVisits(historyItems) {
//     if (historyItems.length) {
//         console.log(`URL ${historyItems[0].url}`);
//         const gettingVisits = browser.history.getVisits({
//             url: historyItems[0].url
//         });
//         gettingVisits.then(gotVisits);
//     }
// }


// let searching = browser.history.search({
//     text: "",
//     startTime: 0,
//     maxResults: 1
// });

// searching.then(listVisits);




// v.
// function onGot(historyItems) {
//     for (const item of historyItems) {
//         console.log(item.url);
//         // console.log(new Date(item.lastVisitTime));
//     }
// }


browser.history // ERROR
    .search({
        text: "",
        startTime: 0,
    })
    .then(renderList);


function renderList(historyItems) {

    for (const item of historyItems) {
        // console.log(item.url);
        console.log(item);
        // console.log(new Date(item.lastVisitTime));
    }

}


debugger