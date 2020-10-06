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
