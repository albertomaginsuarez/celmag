
import React from 'react'
import { Button } from 'react-bootstrap';
import '../styles/BodyComponent.css'

const BodyComponent = () => {

    /////////////////////////////////////
    const bolsa = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="body_principal">
            <Button variant="success" className="primary_button">Primary</Button>
            {
                bolsa.map((lluvia) => {
                    return (
                        <Button variant="success" className="primary_button_2">
                            BOTON DE PRUEBA {lluvia}
                        </Button>
                    )
                })
            }
        </div>

    )
}

export default BodyComponent