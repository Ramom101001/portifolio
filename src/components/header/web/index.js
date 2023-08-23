import React from 'react'
import "./web.css";

function Web() {
    return(
    
    <div className="web">
    <div className="web-option">
        <a href='#project'> <i class="fas fa-edit option-icon"></i>Projetos</a>
    
    </div>

    <div className="web-option">
        <a href='#skills'> <i class="fas fa-laptop option-icon"></i>Experiência</a>
    
    </div>

    <div className="web-option">
        <a href='#work'> <i class="fas fa-briefcase option-icon"></i>Trabalhos</a>
    
    </div>

    <div className="web-option">
        <a href='#contact'> <i class="fas fa-user option-icon"></i>Contatos</a>
    
    </div>

</div>)
        
    
}

export default Web;
