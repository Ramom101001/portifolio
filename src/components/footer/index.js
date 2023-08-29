import React from 'react';
import './footer.css';

import logo from "../../assets/logo.png"

import wpp from "../../assets/whatsapp.png"
import git from "../../assets/github.png"
import linkd from "../../assets/linkedin.png"

function Footer() {
    return (
        <footer className="footer">
                <div className="container">
                    <div className='footer__line'>

                        <div className="footer__logo">  
                        
                            <div className='footer__logo__name'>
                                <img src= {logo} alt='imagem logo'/>
                                <p>RAMOM</p>
                            </div>

                            <div className='footer__logo__about'>
                                <p>eu sou pica eacnajkaneCb nkjhgvz bnkjxhhvj mazjxhkhbm nmckh,
                                    nxcjbkdn mvck.n xfmcb nscmnjbn mscbnjn mfcmbnkn, cbmn, dmcbnkjnd,
                                    njn llvg vbnjhvm nnjhvgn nkjhvbn kjhvn bnhgvbbnhg
                                </p>
                            </div>
                        </div>

                        <div className="footer__info">
                            <p>Dados:</p>
                            <p>Email: ramom101001@gmail.com</p>
                            <p>Telefone: (21) 99788-5085</p>
                            <p>Localização: Sua Cidade, Seu País</p>
                        </div>

                        <div className="footer__social">
                            <img src= {wpp} alt='acae'/>
                            <img src= {git} alt='aecaec'/>
                            <img src= {linkd} alt='acecea'/>

                        </div>

                    </div>

                    <div className='footer__line'>
                        <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
                        <p>Créditos para ícones: <a href="https://www.flaticon.com/">Flaticon</a></p>
                    </div>

                </div>
        </footer>
    );
}

export default Footer;