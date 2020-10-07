// Асинхронность
// Event Loop

// Самым типичным примером можно привести таймауты и интервалы

// Таймаут

const timeout = setTimeout( () => {
    console.log('After timeout')
}, 2500)  // Спустя 2,5 секунды появляется надпись After timeout
clearTimeout(timeout) // Данная функция ощищает таймаут.

const interval = setInterval( () => {
    console.log('After interval')
}, 2500)  // мс // Спустя 2,5 секунды появляется надпись After interval
clearTimeout(interval) // Данная функция ощищает интервал.
// Отличие таймаута от интервала - таймаут вызывается один раз, интервал будет вызвать функцию постоянно

// Существует более удобный механизм - Promise

const delay = (wait = 1000) => {
    return promise = new Promise((resolve, reject) => { // Глобальная функция
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

delay(2500)
    .then( () => {
        console.log('After 2 seconds')
    })
    .catch( err => console.error(err))
    .finally( () => console.log('Finally'))

// Но лучше это записать так:
const getData = () => new Promise(resolve => resolve([1,1,2,3,5,8,13]))



async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()