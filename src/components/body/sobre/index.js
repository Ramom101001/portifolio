import React from 'react'
import "./sobre.css";
import SocialMedia from '../../comp/social-media/index';

function Sobre() {
  return (
    <div className="about">
      <div className="about-top">

        <div className="about-info">
          aaececea
          <br/><span className="about-name">afeac</span>
          <br/>ascaeveavea

      </div>

        <div className="about-photo">Contato
        <img src={require("../../../assets/voce.jpg").default}className="picture"/>
        </div>

        <SocialMedia/>

    </div>
    
</div>

  );
}
export default Sobre;