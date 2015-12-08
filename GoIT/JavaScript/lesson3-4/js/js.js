var obj = {
    newElement: function(elem, className, lockalElem, innerText) {
        var element = document.createElement(elem);
        var classElem = element.classList.add(className);
        var path = document.querySelector(lockalElem);
        element.innerHTML = innerText;
        path.appendChild(element);
    },
    formElement: function(className, lockalElem, innerText) {
        var element = document.createElement('form');
        var classElem = element.classList.add(className);
        var path = document.querySelector(lockalElem);
        element.setAttribute("action", "");
        element.setAttribute("method", "post");

        element.innerHTML = innerText;
        path.appendChild(element);
    },
    inputElement: function(lockalElem,  innerText, idInput, value) {
        var element = document.createElement('input');
        var path = document.querySelector(lockalElem);
        var label = document.createElement('label');
        element.setAttribute("type", 'checkbox');
        element.id = idInput;
        element.setAttribute('value', value);
        path.appendChild(element);

        label.setAttribute('for', idInput);
        label.innerHTML = innerText;
        path.appendChild(label);
    },
    submitForm: function() {
        var button = document.createElement('button');
        var classElem = button.classList.add("btn");
        var path = document.querySelector('form');
        button.setAttribute('value', 'Проверить мои результаты');
        button.innerHTML = 'Проверить мои результаты';
        path.appendChild(button);
    }
}

obj.newElement('div', 'container', 'body', " ");
obj.newElement('h1', 'headline', 'div.container', "Тест по программированию");
obj.formElement('form', 'div.container', " ");
obj.newElement('ol', 'list', 'form', " ");
obj.newElement('li', 'item', 'ol', "Вопрос №1");
obj.newElement('li', 'item', 'ol', "Вопрос №2");
obj.newElement('li', 'item', 'ol', "Вопрос №3");
obj.newElement('ul', 'inner__list', 'li', " ");
obj.newElement('li', 'inner__item', '.inner__list', " ");
obj.newElement('li', 'inner__item', '.inner__list', " ");
obj.newElement('li', 'inner__item', '.inner__list', " ");

obj.inputElement("ul li:first-child", "Вариант ответа №1", "value1.1", 'answ1');
obj.inputElement("ul li:nth-child(2)", "Вариант ответа №2", "value1.2", 'answ2');
obj.inputElement("ul li:nth-child(3)", "Вариант ответа №3", "value1.3", 'answ2');

obj.newElement('ul', 'inner__list', 'ol > li:nth-child(2)', " ");
obj.newElement('li', 'inner__item', 'li:nth-child(2) ul', " ");
obj.newElement('li', 'inner__item', 'li:nth-child(2) ul', " ");
obj.newElement('li', 'inner__item', 'li:nth-child(2) ul', " ");

obj.inputElement("ol>li:nth-child(2) ul li:first-child", "Вариант ответа №1", "value2.1", 'answ1');
obj.inputElement("ol>li:nth-child(2) ul li:nth-child(2)", "Вариант ответа №2", "value2.2", 'answ2');
obj.inputElement("ol>li:nth-child(2) ul li:nth-child(3)", "Вариант ответа №3", "value2.3", 'answ2');

obj.newElement('ul', 'inner__list', 'ol > li:nth-child(3)', " ");
obj.newElement('li', 'inner__item', 'li:nth-child(3) ul', " ");
obj.newElement('li', 'inner__item', 'li:nth-child(3) ul', " ");
obj.newElement('li', 'inner__item', 'li:nth-child(3) ul', " ");

obj.inputElement("ol>li:nth-child(3) ul li:first-child", "Вариант ответа №1", "value3.1", 'answ1');
obj.inputElement("ol>li:nth-child(3) ul li:nth-child(2)", "Вариант ответа №2", "value3.2", 'answ2');
obj.inputElement("ol>li:nth-child(3) ul li:nth-child(3)", "Вариант ответа №3", "value3.3", 'answ2');

obj.submitForm();
