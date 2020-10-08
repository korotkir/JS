// DOM - document object model
// Работа с html

// Допустим мы хотим поменять что то в заголовке h1

// document объект предстявляющий DOM - дерево
// Самый простой и эффективный способ, получить элемент по ID

const heading = document.getElementById('hello')

console.dir(heading)

// setTimeout(() => {
//     heading.textContent = 'Changed from JavaScript!' // Меняем текст h1
//     heading.style.color = 'yellow' // Меняем цвет элемента h1
//     heading.style.textAlign = 'center' // Выравниваем по горизонтали
//     heading.style.background = 'blue' // Меняем фон
//     heading.style.padding = '2rem' // Отступ
// },2500)

// Можно сделать например так:

function addStyleTo(node, text, background, color, fontSize) {
    node.textContent = text // Меняем текст h1
    node.style.color = color // Меняем цвет элемента h1
    node.style.textAlign = 'center' // Выравниваем по горизонтали
    node.style.background = background // Меняем фон
    node.style.padding = '2rem' // Отступ
    // If сработает только в том случае, если знчение != falsy
    // falsy == null, undifined, false и т.д
    // Соответсвенно если не указывать данный аргумент функции, сработает значение по умолчанию
    if (fontSize){
        node.style.fontSize = fontSize
    }
}

// Например у элемента нет H2
const heading2 = document.querySelector('h2') // Современный способ, стоит пользоваться именно им
// const heading2 = document.querySelector('.h2-class') // Для классов
// const heading2 = document.querySelector('#h2-id') // Для ID
console.log(heading2)
// Как получить второй h2?
//heading3 = heading2.nextElementSibling
// Или так:
const h2List = document.querySelectorAll('h2')
heading3 = h2List[1]
console.log(heading3)

setTimeout(() => {
    addStyleTo(heading, 'JavaScript', 'yellow', 'blue')
}, 2500)

setTimeout(() => {
    addStyleTo(heading2, 'Практикуйся', 'blue', 'yellow' )
}, 3000)

setTimeout(() => {
    addStyleTo(heading3, 'И все получится', 'green', 'orange', '4rem')
}, 4000)

// При клику на блок, он будет менять цвет фона:

heading.onclick = () => {
    if (heading.style.background === 'yellow') {
        heading.style.background = 'orange'
    } else {
        heading.style.background = 'yellow'
    }
}