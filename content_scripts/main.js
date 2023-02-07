
// /*
// beastify():
// * удаляет каждый узел в document.body,
// * затем вставляет выбранного зверя
// * затем удаляется как обработчик
// */


browser.history // ERROR
    .search({
        text: "",
        startTime: 0,
    })
    .then(renderList);


function renderList(historyItems) {

    // let listEl = '';
    let listEl = document.createElement('ul');
    // listEl.innerHTML('Это список истории');
    listEl.innerHTML = 'Это список истории';
    // listEl.classList.add = 'history__list';
    listEl.classList.add('history__list');
    let listItemsTemplate = ``;

    // собираем пункты
    for (const item of historyItems) {
        // console.log(item.url);
        console.log(item);
        // console.log(new Date(item.lastVisitTime));

        // let itemTemplate = `<li>${item}</li> `; // не нужна ?

        listItemsTemplate += `<li class="history__list-item">${renderListItem(item)}</li> `;
    }

    // вставляем пункты в список
    listEl.innerHTML = listItemsTemplate;


    // listEl

    let appEl = document.querySelector('#app');
    appEl.append(listEl);


}

function renderListItem(item) {
    // item

    let template = '';

    template += `
        <time class="history__list-item-datetime" datetime="ГГГГ-ММ-ДДTчч:мм">${item.lastVisitTime}</time>
        <div class="history__list-item-icon"> 
            <img src="${item.url}favicon.ico" alt="">
        </div>
        <div class="history__list-item-title">${item.title}</div>
        <a href="${item.url}" class="history__list-item-link">link to page</a>  
    `;


    return template;
}


debugger