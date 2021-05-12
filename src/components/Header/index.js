import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar';

import './style.css';

const Header = () => {
    return(
        <div className="top">

            <div className="logo">
               <Link to="/" ><img src="/logo.png" width="150px"height="50px" alt="" title="Andimar Surf, sua loja de surf !"/></Link>
            </div>

            <div className="search-p"> 
                <SearchBar />
            </div>
        
            <div className="user-Info">
                <div className="userLog">
                    <p>Administrador</p>
                    <p>Quarta-Feira</p>
                </div>
                <div className="userImg">

                    <img src="img/user.jpg" alt="Foto do usuário"></img>
                </div>
            </div>
            
                    
        </div>
    );
}

export default Header;