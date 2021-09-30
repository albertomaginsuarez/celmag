import React, { useState } from 'react'
import '../styles/AvatarComponent.css'

const ListaAvatar = () => {
const [celi, setCeli] = useState (true)
const celinaMoya = () => {
    setCeli (!celi)
}
    const avatares = [
        {
            "nombre": "Magin",
            "apellido": "Suarez",
            "dni": "34377565",
            "avatar": ""
        },
        {
            "nombre": "Celina",
            "apellido": "Moyano",
            "dni": "35377565",
            "avatar": ""
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
                                <span>{elemento.dni}</span>
                            </li>
                        )
                    })
                }
            </ul>        
            <button
            variant = 'success'
            onClick={()=> celinaMoya ()}>
            {celi ? 'celi' : 'celina'}
            </button>
        </>
    )
}

export default ListaAvatar
