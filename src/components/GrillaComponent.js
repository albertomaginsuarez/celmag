import React, { useEffect, useState } from 'react'
import '../styles/Grid.css'

import FotoMia from '../images/celi.jpeg'

import FotoCeli1 from '../images/foto1.jpeg'
import FotoCeli2 from '../images/foto2.jpeg'
import FotoCeli3 from '../images/foto3.jpeg'
import FotoCeli4 from '../images/foto4.jpeg'


const fotosDelServidor = [FotoCeli1,FotoCeli2,FotoCeli3,FotoCeli4];

const fotos = [FotoMia];

const GrillaComponent = () => {

    const [fotosServidor, setFotosServidor] = useState([]);    

    const [contador, setContador] = useState(0);
        
    const agregarUnaFotoMas = () => {
        setFotosServidor([...fotosServidor, FotoMia]);
        let arreglo1 = [1,2,3,4,5];
        console.log(arreglo1);
        let arreglo2 = arreglo1.map((numero) => numero*2);
        console.log(arreglo2);
        let arreglo3 = arreglo1.filter((numero) => numero < 4) 
        console.log(arreglo3);
        arreglo1.push(6);
        arreglo1.push(7);
        console.log(arreglo1);
        arreglo1.unshift(8)
        console.log(arreglo1);
        arreglo1.pop();
        console.log(arreglo1);
        arreglo1.shift();
        console.log(arreglo1);
        
        let arregloTemporal = [];
        arreglo1.forEach((element) => {
            console.log(element)
            arregloTemporal.unshift(element);
        })
        console.log(arregloTemporal);        
    }

    const descargarDelServidor = () => {
        setContador(contador+1);
    }

    useEffect(() => {
        setFotosServidor(fotos);
    }, [])

    useEffect(() => {        
        if(contador > 0 && contador <= fotosDelServidor.length) {
            let fotoExtra = fotosDelServidor[contador-1];
            setFotosServidor([...fotosServidor, fotoExtra]);            
        }
    } , [contador]) 

    return (
        <>
            <div className="container">            
                {
                    fotosServidor.map((fotito, index) => {
                        return (
                            <div className="item" key={index}>
                                <img src={fotito} className="gallery-image" alt=""></img>
                            </div>
                        )                    
                    })   
                }                       
            </div>
            <button className="btn btn-primary" onClick={()=> agregarUnaFotoMas()}>Agregar una foto más</button>
            <hr/>            
            <button className="btn btn-primary" onClick={()=> descargarDelServidor()}>Descargar foto del servidor</button>            
        </>
    )
}

export default GrillaComponent
