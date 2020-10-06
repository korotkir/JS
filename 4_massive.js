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