import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";
import { Image } from "react-bootstrap";


const PokemonPage = () => {

    const [poke, setPoke] = useState({})

    useEffect(() => {

        axios.get('db.json')

       .then((response) => {
             setPoke(response.data.Pokemon)
        })


    },[])



    return(
        <main>
        <div>
            aaaaaaaaaaa
            <hr/>

        </div>
      <ul>
        
            {Object.keys(poke).map((key /*pode ser qualquer nome*/)=>{
                return(
                                  
                        <div className="deixar_flex" bgcolor="gray">
                            {poke[key].Number}
                            {poke[key].Nome}
                            <Image className="img-fluid" height = {80} width={80} src= {poke[key].imageSrc} alt={poke[key].alt} />
                        </div>
                      
                      )
            })} 
        </ul> 
        
        
        </main>
    )}



export default PokemonPage;




/* SO FALTA SUBIR PRO GIT */