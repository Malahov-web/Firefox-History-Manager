
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
