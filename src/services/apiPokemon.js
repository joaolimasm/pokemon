import axios from 'axios'

function ApiPokemon(type) {
    return axios.create({
        baseURL: 'https://pokeapi.co/api/v2/type/'+type,
    })

}

export default ApiPokemon;