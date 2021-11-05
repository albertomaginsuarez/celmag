import React, { useEffect, useState } from 'react'
import '../styles/Grid.css'

import FotoMia from '../images/celi.jpeg'

import FotoCeli1 from '../images/foto1.jpeg'
import FotoCeli2 from '../images/foto2.jpeg'
import FotoCeli3 from '../images/foto3.jpeg'
import FotoCeli4 from '../images/foto4.jpeg'
import FotoCeli5 from '../images/foto5.jpeg'
import FotoCeli6 from '../images/foto6.jpeg'
import FotoCeli7 from '../images/foto7.jpeg'
import FotoCeli8 from '../images/foto8.jpeg'
import FotoCeli9 from '../images/foto9.jpeg'
import FotoCeli10 from '../images/foto10.jpeg'
import FotoCeli11 from '../images/foto11.jpeg'
import FotoCeli12 from '../images/foto12.jpeg'
import FotoCeli13 from '../images/foto13.jpeg'
import FotoCeli14 from '../images/foto14.jpeg'
import FotoCeli15 from '../images/foto15.jpeg'
import FotoCeli16 from '../images/foto16.jpeg'






const fotosDelServidor = [FotoCeli1,FotoCeli2,FotoCeli3,FotoCeli4,FotoCeli5,FotoCeli6,FotoCeli7,FotoCeli8,FotoCeli9,FotoCeli10,FotoCeli11,FotoCeli12,FotoCeli13,FotoCeli14,FotoCeli15,FotoCeli16];

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

  
   const reiniciarTodasLasFotos = () =>{
       setFotosServidor([]);
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
    
    const borrarUltimaFoto = () => {
        
         }
    
     


 

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
              <button onClick={()=> borrarUltimaFoto()}>Borrar Ultima Foto</button>
              <button onClick={()=> reiniciarTodasLasFotos()}>Reiniciar todas las fotos</button>
              <button className="btn btn-primary" onClick={()=> agregarUnaFotoMas()}>Agregar una foto más</button>
              <hr/>            
              <button className="btn btn-primary" onClick={()=> descargarDelServidor()}>Descargar foto del servidor</button>            
    
        </>
            )

}
export default GrillaComponent
