import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Api from '../../services/api';
import apiPokemon from '../../services/apiPokemon'
import {Button, Container, Image} from "react-bootstrap";
import Alert from '../../componentes/index';
import Verification from '../../services/verification';
import { useAlert } from 'react-alert';
import Pika from '../../imagens/pokemon.jpg';
import FigureImage from "react-bootstrap/FigureImage";



function Main() {
    const [cidade, setCidade] = useState('');
    const [temp, setTemp] = useState('');
    const [chuva, setChuva] = useState('');
    const [dados, setDados] = useState('');
    const [type, setType] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState();

    
    async function pegarTemperatura() {
        try {
            let api = new Api(cidade);
            console.log(api);
           const response =  await api.get();
           console.log(response);
           callPokemon(response.data['weather'][0]['main'], response.data.main.temp);
                // .then(response => {
                //     setDados(response.data);
                //     console.log(dados);
                //     if (dados['weather'] && dados.main.temp) {
                //         callPokemon(dados['weather'][0]['main'], dados.main.temp);
                //     }
                // });
        } catch (e) {
            alert('Cidade Não Encontrada');
        }

    }

    async function callPokemon(clima, temperatura) {
        try {
            console.log(clima, temperatura);
            if (clima) {
                if (clima == 'rain') {
                    setType('electric');
                    setChuva('Está chovendo!');
                } else {
                    if (temperatura) {
                        setChuva('Não Está chovendo!');
                        temperatura = Math.trunc(temperatura);
                        temperatura = temperatura - 273;
                        setTemp(temperatura);
                        let tipo = Verification(temperatura);
                        setType(tipo);
                    }
                }
            }


            let api = new apiPokemon(type);
            const response = await api.get();
            console.log(response);
            const {results, pokemon} = response.data;
            if(results){
                callPokemonRandom(results, false);
            }else{
                callPokemonRandom(pokemon, true);
            }
        } catch (e) {
            <Alert>Houve algum problema na execução</Alert>
        }
    }


    async function callPokemonRandom(pokemons, isPokemon) {
        try {
            console.log(pokemons);
            let pok = Math.random() * pokemons.length;
            console.log(pokemons.length);
            pok = Math.trunc(pok);
            if (isPokemon){
                setPokemon(pokemons[pok]['pokemon']['name']);
            }else{
                setPokemon(pokemons[pok]['name']);
            }

        } catch (e) {
            alert('asdasda');
            <Alert>Houve algum problema na execução</Alert>
        }
    }



    return (
        <Container >
            <Image src={Pika} />
            <Col xs="6" sm="4">
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Col md={12}>
                            <Form.Label >Cidade</Form.Label>
                         

                            <Form.Control type="text" placeholder="Informe sua cidade corretamente"
                                          onChange={event => setCidade(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Button onClick={pegarTemperatura}>Buscar</Button>
                </Form>
            </Col>
            <h1>
                {pokemon}
            </h1>
            <h1>
                {type}
            </h1>
            <h1>
                {chuva}
            </h1>
            <h1>
                {temp}ºC
            </h1>
        </Container>

    );
}


export default Main;