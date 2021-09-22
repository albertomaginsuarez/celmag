
import React, {  useState  } from 'react'
import { Button } from 'react-bootstrap';
import '../styles/BodyComponent.css'
import ListaAvatar from './ListaAvatar'

const BodyComponent = () => {

    const bolsa = [1, 2];
    
    //Memorizar
    const [mostrar, setMostrar] = useState(true);    

    const quieroMostrarLosBotones = () => {        
        setMostrar(!mostrar);        
    }

    /////////////////////////////////////
    return (
        <div className="body_principal">
            {   mostrar &&
                <>
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
                    <ListaAvatar />
                </>                    
            }
            <Button 
                variant="success" 
                className="primary_button"
                onClick={() => quieroMostrarLosBotones() }
            >{ mostrar ? 'Ocultar' : 'Mostrar' }</Button>
        </div>

    )
}

export default BodyComponent