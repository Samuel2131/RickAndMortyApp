
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { Character } from '../models/character';

const url = "https://rickandmortyapi.com/api/character";
  
export const CharacterPage = () => {
    const params = useParams();
    const [id, setId] = useState<number | null>(null);
    const [character, setCharacter] = useState<Character | null>();
    
    useEffect(() =>{
        try{
            setId(Number(params.id));
        }catch(e){};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(id){
            (async () => {
                setCharacter((await axios.get(url+`/${params.id}`)).data);
            })();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return(
        <div className='d-flex align-items-center justigy-content-center'>
            {character && 
                <div> 
                    <img src={character.image} alt='...'/> 
                    <p>{character.id}</p>
                    <p>{character.gender}</p>
                    <p>{character.name}</p>
                    <p>{character.origin && character.origin.name}</p>
                    <p>{character.created}</p>
                    <p>{character.type}</p>
                    <p>{character.species}</p>
                </div>
            }
        </div>
    );
}