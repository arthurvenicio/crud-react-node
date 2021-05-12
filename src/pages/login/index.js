import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Login = (() => {
    return(
        <div id="container-login"> 
            <div className="box-login">

                <div className="logo">
                    <img src="logo.png"  alt="Logo Andimar" />
                </div>

                <form>
                    <div className="forms-input">
                        <div>
                            <p>Email</p>
                            <input type="email" placeholder="Insira seu email aqui" required></input>
                        </div>
                        <div className="input-pswwd">
                            <p>Senha</p>
                            <input type="password" placeholder="Insira sua senha aqui" required></input> 
                        </div>

                        <div className="button-login">
                        <button type="submit">Login</button>
                        </div> 

                        <div id="content-alt">
                        <Link to={"/register"}>Não tem conta?</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

) 



export default Login;