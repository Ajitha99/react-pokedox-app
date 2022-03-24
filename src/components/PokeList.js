import { useState, useEffect } from 'react';
import axios from "axios";
import {CLIENT_URL} from '../services/constants'
// import dotenv from 'dotenv';
import Pokemon from './Pokemon';

// dotenv.config();
// require(dotenv).config();
function PokeList(){
    const [pokemons, setPokemons] = useState([])

    // let client_url = process.env.CLIENT_URL;
    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get(CLIENT_URL)
                // const response = await axios.get(client_url)
                const { results } = response.data;
                // const result = response.data.results;
                console.log(results);
                setPokemons(results);
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchData();

    },[])



    return(
        <ul className="container collection with-header" style={{ marginTop: 25 }}>
            {
                // (pokemons || []) - If there is no data, just return an empty array
               (pokemons || []).map((pokemon, index) =>{
                   const { name , url } = pokemon;
                   return <Pokemon 
                        name = {name}
                        url = {url}
                        key = {index}
                   />
               }) 
            }
        </ul>
    )
}

export default PokeList;