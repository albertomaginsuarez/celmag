import react from 'react'
import '../styles/FooterComponent.css'

const FooterComponent = () => {
    return (
        <div className='footer_principal'>
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
       </div>
    );
}
export default FooterComponent;