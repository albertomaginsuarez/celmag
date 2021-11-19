
import React, {  useState  } from 'react'
import { Button } from 'react-bootstrap';
import ListaAvatar from './ListaAvatar'

const BodyComponent = () => {

    const bolsa = [1, 2];
    
    //Memorizar
    const [mostrar, setMostrar] = useState(false);    

    const quieroMostrarLosBotones = () => {        
        setMostrar(!mostrar);        
    }

    /////////////////////////////////////
    return (
        <>
            {   mostrar &&
                <>
                    
                    <ListaAvatar />
                </>                    
            }
            <Button 
                variant="success" 
                className="primary_button"
                onClick={() => quieroMostrarLosBotones() }
            >{ mostrar ? 'Ocultar' : 'Mostrar' }</Button>
        </>
    )
}

export default BodyComponent