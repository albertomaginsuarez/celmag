
import React, { useState } from 'react'
import '../styles/LoginComponent.css'

const HomeComponent = () => {        


    const usuarioBase = "celina@gmail.com";
    const contraseñaBase = "123456";

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ pais, setPais ] = useState('Argentina');        

    const cambiarEmail = (event) => {                
        setEmail(event.target.value);                
    }

    const cambiarPassword = (event) => {        
        setPassword(event.target.value);        
    }

    const validarMyEmailAndPassword = () => {                        
        if( email === usuarioBase && contraseñaBase === password) {
            alert("Login correcto");
        } else {
            alert("Email o la contraseña es incorrecta");
        }
    }        

    return (        
        <div className='login_principal'>            
            <input className='mail_principal' type="text" placeholder="Ingrese su email" value={email} onChange={(event) => cambiarEmail(event)}/>&nbsp;
            <input className='password_principal' type="password" placeholder="Ingrese un password" value={password} onChange={(event) => cambiarPassword(event)}/>&nbsp;
            <button className='iniciar_sesion_principal' type="button" onClick={ () => validarMyEmailAndPassword() }>Iniciar sesión</button>&nbsp;
            <a className= 'olvidaste_contraseña' href="/resetPassword">¿Olvidaste tu contraseña?</a>
            <hr/>
            {pais}            
            <button onClick={() => setPais('Brasil')}>Voy a viajar</button>
            {}
            <button className='crear_cuenta_principal'>Crear cuenta nueva</button>            
        </div>
    )
}

export default HomeComponent

/** 
<form method="POST" action="https://prueba.api.com">            
    <input type="text"/>
    <input type="password"/>
        <button>Iniciar sesión</button>
        <a href="/resetPassword">¿Olvidaste tu contraseña?</a>
        <hr/>
    <button type="submit">Crear cuenta nueva</button>
</form>
*/