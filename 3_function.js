// Урок 6. Функции.

// Существует несколько способов создания функций:

// 1.Function Declaration
function greet(name) {
    console.log('Привет -', name)
}
greet('Лена')

// 2. Function Expression
const greet2 = function greet2(name) {
    console.log('Привет 2 -', name)
}
greet2('Аркадий')

//
console.log(typeof greet)
console.log(typeof greet2)
console.dir(greet)
console.dir(greet2)
//

//Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// },1000)


// Стрелочные функции =>
// Существенно упрощает работу с функциями
// 1
const arrow = (name) => {
    console.log('Привет - ', name)
}
arrow('Кирилл')

// 2
// Если функция принимает один аргуемент и выводит return, можно сократить и убрать скобки
const pow2 = num => num ** 2 // Оператр перевода в степень, не обязательно использовать Math.pow
console.log(pow2(5))


// Параметры по умолчанию
// Если b не указано, то используется параметр по умолчанию, в данном случае b == 1
const summa = (a, b = 1) => a + b
console.log(summa(41))

// Что делать если функция должна принимать неограниченное количетсво чисел?
function sumAll(...all) {
    console.log(all)
}
sumAll(1,2,3,4,5) // all передает все введенные числа в массив

// Как суммировать все введенные числа?
function sumAll2(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll2(1,2,3,4,5,6,7,8,9)
console.log(res)

// Замыкание
// Явление когда из одной функции возвращает другую функцию
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Кирилл')
console.log(logWithLastName)
console.log(logWithLastName('Коротеев'))
console.log(logWithLastName('Иванов'))
