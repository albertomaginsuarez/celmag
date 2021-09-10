
import React from 'react'
import { Button } from 'react-bootstrap';

const BodyComponent = () => {

    /////////////////////////////////////
    const bolsa = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            <Button variant="success">Primary</Button>
            {
                bolsa.map((lluvia) => {
                    return (
                        <button variant="success">
                            BOTON DE PRUEBA {lluvia}
                        </button>
                    )
                })
            }


        </div>

    )
}

export default BodyComponent