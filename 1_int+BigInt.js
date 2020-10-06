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















