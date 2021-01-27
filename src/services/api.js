import axios from 'axios'

function Api(cidade) {
    return axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid=df4b5a490abaa31b01ee9ca63a8cdc10',
})

}

export default Api;