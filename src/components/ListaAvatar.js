import React, { useState } from 'react'
import '../styles/AvatarComponent.css'
import fotoMagin from '../images/magin.jpeg'
import fotoCeli from '../images/foto11.jpeg'

const ListaAvatar = () => {
const [celi, setCeli] = useState (true)

const avatarCeli = [fotoCeli]
const avatarMagin = [fotoMagin]

    const avatares = [
        {
            "nombre": "Magin",
            "apellido": "Suarez",
            "dni": "34377565",
            Image: fotoMagin
        },
        {
            "nombre": "Celina",
            "apellido": "Moyano",
            "dni": "35377565",
            Image: fotoCeli
        },
    ];
    return (
        <>
            <ul className='lista_avatar'>
                {
                    avatares.map((elemento, index) => {
                        return (
                            <li key={"ListaAvatar" + index}>
                                <span>{elemento.nombre}</span>&nbsp;
                                <span>{elemento.apellido}</span>&nbsp;
                                <span>{elemento.dni}</span>&nbsp;
                                <span>{elemento.Image}</span>
                                
                            </li>
                        )
                        img= fotoMagin; 
                    })
                }
            </ul>        
            
        </>
    )
}

export default ListaAvatar
