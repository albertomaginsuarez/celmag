
import React, { useState } from 'react'
const HomeComponent = () => {        

    const [ email, setEmail ] = useState('albertomaginsuarez@gmail.com');
    const [ password, setPassword ] = useState('');
    
    const cambiarEmail = (event) => {        
        setEmail(event.target.value)        
    }
    
    const cambiarPassword = (event) => {        
        setPassword(event.target.value)  
        console.log(password)      
    }

    const validarMyEmailAndPassword = () => {                
        console.log(email)        
        console.log(password)
        alert("La contraseña del usuario " + email+ " es incorrecto")        
    }    

    return (        
        <div>            
            <input type="text" value={email} onChange={(event) => cambiarEmail(event)}/>
            <input type="password" value={password} onChange={(event) => cambiarPassword(event)}/>
            <button type="button" onClick={ () => validarMyEmailAndPassword() }>Iniciar sesión</button>
            <a href="/resetPassword">¿Olvidaste tu contraseña?</a>
            <hr/>
            <button>Crear cuenta nueva</button>
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