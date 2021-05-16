import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar';

import './style.css';

const Header = () => {

    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds(); 

    return(
        <div id="top">

            <div id="logo">
               <Link to="/" ><img src="/logo.png" width="150px"height="50px" alt="" title="Andimar Surf, sua loja de surf !"/></Link>
            </div>

            <div className="search-p"> 
                <SearchBar />
            </div>

            <div id="button-header-cadastrar">
            <a href="/create" >Cadastrar Produto</a>
            </div>
        

            <div id="user-Info">
                <div id="userLog">
                    <p>Administrador</p>
                    <p>{`${hour}:${minutes}:${seconds}`}</p>
                </div>
                <div id="userImg">

                    <img src="img/user.jpg" alt="Foto do usuário"></img>
                </div>
            </div>
            
                    
        </div>
    );
}

export default Header;