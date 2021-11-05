import React, {useState} from 'react';

const CaroHija1 = ({apellido1, dinero, setDinero}) => {        
    return (
        <div>
            <label>Hola soy Caro {apellido1} tiene: {dinero}$</label>
            <button className="btn btn-primary" onClick={() => setDinero(dinero+1)}>Sume 1</button>
        </div>
    )
}

const NicoHijo2 = ({apellido1, dinero, setDinero}) => {    

    return (
        <div>
            <label>Hola soy Nico {apellido1} tiene: {dinero}$</label>
            <button className="btn btn-primary" onClick={() => setDinero(dinero-1)}>Reste 1</button>
        </div>
    )
}

const HermanosComponent = () => {

    const apellidoPaterno = "Perez";
    const [dinero, setDinero] = useState(5);
    return (
        <div>
            <CaroHija1 apellido1={apellidoPaterno} dinero={dinero} setDinero={setDinero}/>
            <hr/>
            <NicoHijo2 apellido1={apellidoPaterno} dinero={dinero} setDinero={setDinero}/>
        </div>
    )
}

export default HermanosComponent
