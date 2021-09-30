import react, { useState } from 'react'
import '../styles/FooterComponent.css'


const FooterComponent = () => {

    const [celi, setCeli] = useState (true)
    const soyCelinaMoyano = () => {
        setCeli (!celi);
    }
    return (
        <div className='footer_principal'>
            {celi && 
            <footer>
        
                    <h4 className='titulo_footer'>
                        CELMAG SRL.
                    </h4>
                    <p>
                        <a href='htps://instagram.com'>Politicas</a>&nbsp;
                        <a href='https://instagram.com'>Privacidad</a>&nbsp;
                        <a href='https://instagram.com'>Condiciones</a>
                    </p>
            
            </footer>
}
   <button
   variant='success'
    onClick={()=> soyCelinaMoyano()}
    > {celi ? 'chau' : 'hola'}
   </button>
       </div>
    );
}
export default FooterComponent;