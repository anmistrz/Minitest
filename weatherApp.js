
// use this API key if you don't want to use dotenv
// const config = {
//     API_KEY: '2ac8658bc0e844303eeeffe8f9e70c18'
// }

import { config } from './config.js'

const getDataWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => { 
            if (data.cod === '404') {
            throw new Error(data.message)
            }
            return data
        })
        .catch((error) => console.log(error))
    return response
}

const printData = async (city) => {
    const data = await getDataWeather(city)
        .then((data) => {
            const getDataByUniqueDate = data.list.reduce((acc, item) => {
                const date = item.dt_txt.split(' ')[0]
                acc[new Date(date).toDateString()] = `${item.main.temp}°C`
                return acc
            }, [])
            const result = Object.keys(getDataByUniqueDate).map((item) => {
                const itemSplit = item.split(' ')
                return `${itemSplit[0]}, ${itemSplit[2]} ${itemSplit[1]} ${itemSplit[3]}: ${getDataByUniqueDate[item]}`
            })
            console.log(`Weather forecast:`)
            console.log(result.join('\n'))

        }).catch((error) => console.log(error))

    return data
}

printData('Jakarta')

