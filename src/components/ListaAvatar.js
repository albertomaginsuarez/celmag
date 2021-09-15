import React from 'react'

const ListaAvatar = () => {

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
        <ul>
            {
                avatares.map((elemento, index) => {
                    return (
                        <li key={"ListaAvatar" + index}>
                            <span>{elemento.nombre}</span>
                            <span>{elemento.apellido}</span>
                            <span>{elemento.dni}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListaAvatar
