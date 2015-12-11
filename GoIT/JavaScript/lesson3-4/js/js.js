var app = {
    createElement: function(params) {
        var element = document.createElement(params.tagName);


        if (params.className) {
            element.className = params.className;
        }

        if (params.inputType) {
            element.setAttribute('type', params.inputType);
        }

        if (params.content) {
            element.innerHTML = params.content;
        }

        if (params.parentElement) {
            params.parentElement.appendChild(element);
        }

        if (params.nameValue) {
            element.setAttribute('value', params.nameValue);
        }

        if (params.tagName === 'form') {
            element.setAttribute('action', 'index.html');
            element.setAttribute('method', 'post');
        }

        return element
    },
    generateQuestion: function(amount, answersAmount) {
        var ol = this.createElement({
            tagName: 'ol',
            parentElement: formElement
        })

        for (var i = 0; i < amount; i++) {

            var li = this.createElement({
                tagName: 'li',
                content: 'Вопрос №' + (i + 1)
            })

            ol.appendChild(li)

            var ul = this.createElement({
                tagName: 'ul',
                className: 'inner__list',
                parentElement: li
            })

            for (var j = 0; j < answersAmount; j++) {

                var olLi = this.createElement({
                    tagName: 'li',
                    parentElement: ul
                })

                var label = this.createElement({
                    tagName: 'label',
                    content: 'Вариант ответа №' + (j + 1),
                    parentElement: olLi
                })
                var checkbox = this.createElement({
                    tagName: 'input',
                    inputType: 'checkbox',
                    parentElement: label
                });

                checkbox.parentNode.insertBefore(checkbox, label.childNodes[0]);
            }
        };

    }
}
var body = document.querySelector('body');

var wrapper = app.createElement({
    tagName: 'div',
    className: 'wrapper',
    parentElement: body
});

app.createElement({
    tagName: 'h1',
    content: "Тест по программированию",
    parentElement: wrapper
});

var formElement = app.createElement({
    tagName: 'form',
    parentElement: wrapper
});

app.generateQuestion(3, 3);

app.createElement({
    tagName: 'input',
    inputType: 'submit',
    className: 'check-result',
    nameValue: 'Проверить мои результаты',
    parentElement: formElement
});
