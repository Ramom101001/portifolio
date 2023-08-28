import React from 'react';
import './footer.css';

import img2 from "../../../public/eu.png";

function Footer() {
    return (
        <footer className="footer">
            <div id='footer-new' className='footer-new'>
                <div className="container">
                    <div className='footer-new__holder position-relative'>

                        <div className="name-logo">  
                            <img src={img2} className='logo' alt='logo'/>
                            <p>RAMOM</p>
                        </div>

                        <div className="contact-info">
                            <p>Email: ramom101001@gmail.com</p>
                            <p>Telefone: (21) 99788-5085</p>
                            <p>Redes Sociais: <a href="https://linkedin.com/seulinkedin">LinkedIn</a>, <a href="https://github.com/seugithub">GitHub</a></p>
                        </div>

                        <div className="copyright-info">
                            <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
                            <p>Créditos para ícones: <a href="https://www.flaticon.com/">Flaticon</a></p>
                        </div>

                        <div className="location-info">
                            <p>Localização: Sua Cidade, Seu País</p>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;