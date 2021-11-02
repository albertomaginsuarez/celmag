import React, { useEffect, useState } from 'react'
import '../styles/Grid.css'

const fotos = ["Foto 1", "Foto 2", "Foto 3", "Foto 4", "Foto 5", "Foto 6", "Foto 7", "Foto 8", "Foto 9", "Foto 10"];

const GrillaComponent = () => {

    const [fotosServidor, setFotosServidor] = useState([]);

    useEffect(() => {                 
        setFotosServidor(fotos);
    }, [])

    return (
        <div className="container">            
            {
                fotosServidor.map( (elem) => {
                    return (
                        <div className="item">{elem}</div>
                    )                    
                })   
            }                        
        </div>
    )
}

export default GrillaComponent