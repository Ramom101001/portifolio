import React, { useState, useEffect } from 'react'
import './header.css';
import Web from './web/index';
import Mobile from "./mobile/index";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <div className={`header container ${isSticky ? 'sticky' : ''}`}>
      <div className='logo'>Ramom Rangel</div>

      <div className='menu'>
          <div className='web-menu'>
              <Web />
          </div>
          <div className="mobile-menu">
              <div onClick ={()=> setIsOpen(!isOpen)}>
                  <i className="fas fa-th-large menu-icon"></i>
              </div>  
              {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}  
          </div>
      </div>
  </div>
    );
}


export default Header;