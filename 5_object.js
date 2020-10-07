// Урок 8. Объекты.

const personObject = {
    nameObject: 'Kirill',
    ageObject: 22,
    isProgrammer: true,
    languages: ['ru', 'en'],
    'complex key': 'Complex Value',
    ['key_' + ( 1 + 3 )]: 'Computed Key', // = key_4
    greet() {
        console.log('greet from person')
    },
    info() { // Context
        console.info('Информация про человека, по имени', this.nameObject) // this внутри функции является
        // тем же самым что и personObject
    }
}

console.log(personObject.name)
console.log(personObject['age'])
console.log(personObject['complex key'])
personObject.languages.push('by') // Добавляем в объект еще один язык
console.log(personObject['key_4'])
// Убираем строку 'Computed Key'
delete personObject['key_4'] // удаление ключа и значения
console.log(personObject)

// Деструктуризация

// Старый синтаксис
const nameObj = personObject.name
const ageObj = personObject.age
const langObj = personObject.languages
console.log(nameObj, ageObj, langObj)

// Новый синтаксис
const {name, age, languages} = personObject
console.log(name,age,languages)

// Если мы знаем что в массивах мы можем использовать различные циклы позволяющие нам делать итерации по элементам массива,
// то с объектами мы так сделать не можем, потому что объекты не итерируемые.
// Тем не менее часто встречаются ситуации когда нам нужно это реализовать:

for (let key in personObject) {
    console.log(key)
}

// Если мы хотим получить значение?

for (let key in personObject) {
    console.log('key:', key)
    console.log('value', personObject[key])
}

console.log('-------------')
// Чем опасен цикл for in?
// Цикл for in он бежит не только по ключам самого объекта, он также может заходить в его прототип.
// если хотим этого избежать, нужно записать определенную проверку:

for (let key in personObject) {
    if (personObject.hasOwnProperty(key)){
        console.log('key:', key)
        console.log('value', personObject[key])
    }
}
console.log('------------')

// При этом современные способы делать итерации по ключам и по объекту:
const keys = Object.keys(personObject)
console.log(keys) // Мы получаем массив, состоящий из ключей объекта
// У массива имеется метод forEach()
keys.forEach((key) => {
    console.log('key:', key)
    console.log('value', personObject[key])  // Получаем то же самое что и через цикл for if, сдезь не нужно делать проверку
})

// Context
personObject.info()

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        // 'key': value
        Object.keys(this).forEach(key => {
            console.log(`'${key}': ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('--- Start --- ')
        }
        Object.keys(this).forEach(key => {
            console.log(`'${key}': ${this[key]}`)
            if (between) {
                console.log('---------')
            }
        })
        if (bottom) {
            console.log('--- End ---')
        }
    }
}

const bound = logger.keys.bind(logger) //bind - он берет и привязывает определленный контент, который мы сами выберем
bound()
logger.keys.call(personObject) // Если bind возвращает новую функцию, банит функцию и сразу ее вызывает
logger.keysAndValues.call(personObject)
logger.withParams.call(personObject, true, true, true)
logger.withParams.apply(personObject, true, true, true) // Метод apply делать одив в один что и call,
// но принимает всегда только два параметра