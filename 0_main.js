// 1.Переменные

// var one = '1'; // устаревший тип данных
// Предпочтительно использовать если не собираешься менять значение переменной
const two = '2'; // невозможно присвоить новое значение (read only).
let three = '3'; // есть возможность присвоить новое значение

// 2.Типы данных

const text = 'text' // string
const number = 5 // number
const boolean = false // boolean

// Название переменных стоить писать так: firstName, lastName. Также поддерживаются любые специальные символы в названиях.
// Нельзя начинать переменные с цифр, начинать со специальных символов можно.
// Писать ; в конце строки не обязательно!

// 3.Мутирование
const firstName = 'Кирилл'
const age = 22
console.log('Имя человека: ' +  firstName + ', а возраст человека: ' + age) // автоматическое приведение разных типов данных к одному


//alert()
console.log()
// prompt() // как alert(), только с вводом данных

// 4.Операторы
let a = 5
let b = 2
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(++a) // a + 1
console.log(--b) // b - 1
console.log(a += b) // -=, *=, /=

// 5.Типы данных
console.log(typeof a) // выводит тип переменной

console.log(typeof true) // boolean
console.log(typeof 'Kirill') // string
console.log(typeof 21) // number
let x
console.log(typeof x) // undefined
console.log(null) // null

// 6.Приоритет операторов

const fullAge = 21
const birthYear = 1998
const currentYear = 2020

const isFullAge = currentYear - birthYear >= fullAge

// 7.Условные операторы

const lessonStatus = 'pending'

if (lessonStatus == 'ready') {
    console.log('Курс готов и его можно проходить')
} else if (lessonStatus == 'pending') {
    console.log('Курс пока находится в разработке')
} else {
    console.log('Курс не получился')
}

const num1 = '42'
const num2 = 42
console.log(num1 == num2) // true. Сравнивает только значения, НЕ обращая внимание на тип данных
console.log(num1 === num2) // false. Помимо сравнение значений, сравнение типа данных


const isReady = true

if (isReady) {
    console.log('Все готово!')
} else {
    console.log('Все не готово!')
}

// Также данное условие можно записать так:

//Тернарное выражение
isReady ? console.log('Все готово!') : console.log('Все не готово!')

// 8. Булевая логика
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 9. Функции

function calculateAge(year) {
    return 2020 - year
}
console.log(calculateAge(22))

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if (age > 0) {
        console.log('Человек по имени ' + name + ' сейчас имеет возраст: ' + age)
    } else {
        console.log('Вообще-то это уже будущее!')
    }

}

logInfoAbout('Кирилл', 1998)
logInfoAbout('Даниил', 2021)


// 10. Массив

// можно так:
const cars = ['Мазда','Мерседес','Форд'] // более правильный вариант
// или так:
const cars2 = new Array('Мазда','Мерседес','Форд')
console.log(cars[0])
console.log(cars2[1])
// Также мы можем поменять элемент массива
cars[0] = 'Камаз'
// Или добавить
cars[3] = 'Хёнде'
// лучше всего просто класс в конец массива не указывая индекс
cars[cars.length] = 'Пежо'
console.log(cars)

// 11. Циклы
const cars3 = ['Мазда','Мерседес','Форд']

for (let i = 0; i < cars.length; i++) { // Создаем переменную (как правило i), до какого момента продолжать данный цикл,
                                    // дальше говорим что нужно делать после завершения итерации
    car3 = cars[i]
    console.log(car3)
}
// Таким образом мы произвели весь массив
console.log('-----------')
// В последних версиях js появился более удобный вариант:
for (let car3 of cars) {
    console.log(car3)
}
console.log('-----------')
// 12. Объекты
// можно так:
let person = new Object({})
// но лучше так:
const person2 = {
    firstName: 'Кирилл',
    lastName: 'Коротеев',
    year: '1998',
    languages: ['En', 'Ru'],
    hasWife: false,
    greet: function () {
        console.log('greet')
    }
}
console.log(person2.firstName)
person2.greet()

const key = 'year'
console.log(person2[key])
// Также можно изменять значения
person2.hasWife = true
console.log(person2)

// 1:43:50
// Урок 4. Числа