import React from 'react'
import './mobile.css';


function Mobile({isOpen, setIsOpen}) {
  
    return (
    <div className='mobile'>
      <div className='close-icon' onClick ={()=> setIsOpen(!isOpen)}>
            <i class="fas fa-cross-circle"></i>
        </div>

        <div className="mobile-options">
        
    <div className="mobile-option">
        <a href='#project'> <i class="fas fa-edit option-icon"></i>Projetos</a>
    
    </div>

    <div className="mobile-option">
        <a href='#skills'> <i class="fas fa-laptop option-icon"></i>Experiência</a>
    
    </div>

    <div className="mobile-option">
        <a href='#work'> <i class="fas fa-briefcase option-icon"></i>Trabalhos</a>
    
    </div>

    <div className="mobile-option">
        <a href='#contact'> <i class="fas fa-user option-icon"></i>Contatos</a>
    
    </div>
    
    </div>
</div>
     );
  }

export default Mobile;