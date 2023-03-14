import moment from "moment";
// const spamWords = ["viagra", "XXX", "supersale", "free investment"];

export default {
    noSpam: (str) => {
        const keywords = spamWords;

        let hasKeywords = keywords.reduce((accumulator, item) => {
            // Если есть вхождение добавить 1
            return accumulator + str.toLowerCase().includes(item.toLowerCase());
        }, 0);

        if (hasKeywords) {
            return false;
        }
        return true;
    },

    getDayDateFormatted(historyArr) {
        if (historyArr[0] == undefined) {
            return;
        }
        let dayDate = new Date(historyArr[0].lastVisitTime);

        return moment(dayDate).format("D MMMM, dddd");
    },
};

/*
Дано: массив объектов

[
    {
        dateHumanReadable: Date Mon Mar 13 2023 21:26:03 GMT+0300 (Москва, стандартное время)
        id: "ot-4ClD9pnRr"
        lastVisitTime: 1676935642299
        title: "Volar: The Official Language Feature Extension for VS Code - A..."
        url: "https://vueschool.io/lessons/volar-the-official-language-feature-extension-for-vs-code"
        visitCount: 1
    }
] 


Что нужно:
сгруппировать элементы массива (эти объекты), по значению заданного  св-ва .

{

    date: "07-03-2023",
    history: [
        {

        },
        {
            
        }
    ]
}


{

    "07-03-2023":  [
        {

        },
        {
            
        }
    ]
}




Решение:
Пройтись циклом
    (прочесть дату)
    1. узнать к какому дню относится
    2.если есть такой объект с датой этого дня
        добавить туда объект
    если нет
        создать такой объект
        добавить туда объект

Вывод:


*/
