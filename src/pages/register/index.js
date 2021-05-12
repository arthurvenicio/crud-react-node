import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const Register = () =>{

    return (
        <div id="container-register"> 
            <div className="box-register">

                <div className="logo">
                    <img src="logo.png"  alt="Logo Andimar" />
                </div>

                <form > 
                    <div className="forms-register">
                        <div>
                            <p>Email</p>
                            <input type="email" name="email" placeholder="Insira seu email aqui" required></input>
                        </div>
                        <div className="input-pswwd">
                            <p>Senha</p>
                            <input type="password" name="password" placeholder="Insira sua senha aqui" required></input> 
                        </div>

                        <div className="button-register">
                        <button type="submit">Cadastrar</button>
                        </div>
                        <div id="content-alt">
                            <Link to={"/login"}> Já Possui conta?</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
 }