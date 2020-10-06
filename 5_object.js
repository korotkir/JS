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
const nameObj = personObject.nameObject
const ageObj = personObject.ageObject
const langObj = personObject.languages
console.log(nameObj, ageObj, langObj)
// Новый синтаксис
const {name, age, languages} = personObject

console.log(nameObject,ageObject,languages)