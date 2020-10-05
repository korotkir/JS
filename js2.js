// Часть 2
// Урок 4. Числа + Bigint

const sum = 42 // integer
const sum2 = 42.42 // float
const sum3 = 10e3 // 10 в 3 степени (10000) (pow)

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // Максимальное число
// ==
console.log(Math.pow( 2, 53) - 1) // pow

console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) // Минимальное число
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) // негативная бесконечность
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) // позитивная бесконечность
// Стоит запонмить, что "е" - обозначает степень
console.log('2 / 0', 2 / 0)
console.log (Number.isFinite(42)) // Конечно ли число 42?

const stringInt = '42'
const stringFloat = '42.42'
// for Integer
console.log(stringInt + 2 ) // 422
console.log(Number.parseInt(stringInt) + 2 ) // 44
console.log(Number(stringInt) + 2 ) // 44
console.log(+stringInt + 2 ) // 44
// for Float
console.log(Number.parseFloat(stringFloat) + 2 ) // 44
console.log(Number(stringFloat) + 2 ) // 44
console.log(+stringFloat + 2 ) // 44


//

console.log(0.4 + 0.2) // 0.6
// На самом деле будет: 0.6000000000000001
// Решение:
console.log((0.4 + 0.2).toFixed(1)) // fractionDigits = количество знаков после запятой. Выводится строка.
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // выводится число.


// BigInt
// Для работы с числами которые больше чем MAX_SAFE_INTEGER
console.log(90000003232323215443656)  // 9.000000323232321e+22
console.log(typeof 90000003232323215443656) // number
console.log(90000003232323215443656n) // 90000003232323215443656n
console.log(typeof 90000003232323215443656) // bigint
// BigInt только для целых чисел (Integer)
// console.log(10n - 4) // Error
console.log(10n - BigInt(4)) // 6
console.log(5n / 2n) // 2

// Math

console.log(Math.E) // экспонента
console.log(Math.PI) // число пи
console.log(Math.sqrt(25)) // квадратный корень из 25
console.log(Math.pow(5, 3 )) // возведение в степень
console.log(Math.abs(- 42)) // вернет 42
console.log(Math.min(42,21,3,1222,1))
console.log(Math.max(42,21,3,1222,1))
console.log(Math.floor(4.9)) // Округление в низшую сторону. // 4
console.log(Math.ceil(4.9)) // В большую сторону
console.log(Math.round(4.9)) // Округление к близжайшему целому
console.log(Math.trunc(4.9)) // Удаляет дробную часть
console.log(Math.random()) // Random

// Урок 5. Строки.

const name = 'Кирилл'
const age = 18
const output = 'Привет, меня зовут ' + name + ', мой возраст ' + age + ' года.'
console.log(output)
// Но лучше так:
const newOutput = `Привет, меня зовут ${name}, мой возраст ${age}.`
console.log(newOutput)

//
console.log(name.length) // Сколько символов в строчке? - 6
console.log(name.toUpperCase()) // Приводим все символы к верхнему регистру
console.log(name.toLowerCase()) // Приводим все символы к нижнему регистру
console.log(name.charAt(2)) // Достаем один символ по индексу
console.log(name.indexOf('илл')) // Есть ли в переменной эта строка? Выдает индекс с которого все начинается
console.log(name.startsWith('Кир')) // стартует ли строчка с букв 'Кир' - true. Сначала можно изменить регистр (toUpperCase)
console.log(name.endsWith('илл')) // заканчивается ли строчка с 'илл' - true
console.log(name.repeat(3)) // Повторяет строчку трижди (без пробелов)
const string = '    password     '
console.log(string.trim()) // Удаляет все пробелы
console.log(string.trimLeft()) // Удаляет пробелы слева
console.log(string.trimRight()) // Удаляет пробелы справа

//
// Что еще пристутствует в новом синтактсе?
function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Кирилл'
const personAge = 22
const personName2 = 'Григорий'
const personAge2 = '-10'
const personOutput = logPerson`Имя: ${personName}, Возраст: ${personAge}`
const personOutput2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}`
console.log(personOutput)
console.log(personOutput2)



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

// Урок 7. Массивы

let cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const fib = [1, 1,  2, 3, 5, 8, 13]
console.log(cars)
console.log(cars.length)
cars.push('Renaut') // Добавление в конец
console.log(cars)
cars.unshift('Volga')
console.log('Ferrari')
console.log(cars) // Добавление в начало
cars.shift() // Удаление первого элемента из массива
cars.pop() // Удаление посленего элемента из массива
console.log(cars)
const firstCar = cars.shift()
console.log(firstCar) // Вывод первого элемента
const lastCar = cars.pop()
console.log(lastCar) // Вывод последнего элемента
console.log(cars.reverse()) // Переворачивание массива (также мутирует)
console.log(cars) // Все еще reverse

// Задача 1
const text = 'Привет, мы изучаем JS'
let reverseText = text.split(',') // split - разделение по спец. символу. Превращаем в массив
console.log(reverseText)
reverseText = text.split(',').reverse() // reverse - разворачивает
console.log(reverseText)
reverseText = text.split('').reverse().join('') // Строчка наоборот
console.log(reverseText)

// Мы хотим найти элемент в массиве
cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
console.log(cars)
const index = cars.indexOf('BMW') // Получаем 2
cars[index] = 'Porsche' // Таким образом мы заменили по индексу
console.log(cars)

let people = [
    {Name: 'Kirill', budget: 4200},
    {Name: 'Elena', budget: 5200},
    {Name: 'Arkadiy', budget: 6200}
]

// Нам нужно найти человека, бюджет которого явлется 4200
// const index2 = people.findIndex(function(person) {
//     return person.budget === 4200
// })
// console.log(index2)
// console.log(people[0])

// А можно сократить и написать тоже самое:
const person = people.find(person => person.budget === 5200)
console.log(person)

// Есть ли этот элемент в массиве:
console.log(cars.includes('Mazda')) // Вернет true
console.log(cars.includes('Mazdasdsdsd')) // Вернет false

// Видоизменение массивов

// Все элементы массива капс локом
const upperCaseCars = cars.map( cars => {
    return cars.toUpperCase()
})
console.log(upperCaseCars)

// Привести каждый из элементов в квадрат
const toTwoFib = fib.map( num => num**2 )
console.log(fib)
console.log(toTwoFib)

// Например нам нужно убрать из массива числа меньше 20, для этого есть метод filter
let filteredNumbers = toTwoFib.filter( num => {
    return num > 20
})
console.log(filteredNumbers)
// НО ЛУЧШЕ ПИСАТЬ ЭТО КОРОЧЕ:
filteredNumbers = toTwoFib.filter( num => num > 20)
console.log(filteredNumbers)

// filter - фильтрует данные
// map - преобразовывает данные
// reduce - объединение всех элементов массива

//  Нам нужно просуммировать бюджет всех людей, чей бюджет выше 3х тысяч
people = [
    {Name: 'Kirill', budget: 1900},
    {Name: 'Elena', budget: 5200},
    {Name: 'Arkadiy', budget: 6200}
]

let allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
    }, 0)
console.log(allBudget)




