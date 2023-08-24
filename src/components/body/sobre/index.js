import React from 'react'
import "./sobre.css";

import img1 from "../../../assets/voce.jpg";

function Sobre() {
  return (
    <div className="about container">
      <div className="about-top">

        <div className="about-info ">
          <h1>Olá, meu nome é Ramom</h1>
          <p>Tenho 21 anos e sou aprendiz em desenvolvimenento de sites. pretendo me
            tornar um programador Front-end e ser um profissional diferenciado.
          </p>

      </div>

        <div className="about-photo">Contato
        <img src={img1} className="picture" alt=''/>
        </div>

        

    </div>
    
</div>

  );
}
export default Sobre;