
import React, { useState } from 'react'


 const HolaComponent = () => {

    const [hola, setHola] = useState('blanco');    
 
       return (
            <div>
            {hola}
            <button onClick={()=> setHola ('negro')}> Color </button>
             {}
            </div>
         )
   }

 export default HolaComponent 

       
