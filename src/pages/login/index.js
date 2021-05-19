import React, { useCallback } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/auth';

import { authConfig } from '../../auth/config';

import './style.css';

const Login = (() => {

    const history = useHistory();
    
    const { user } = useAuth();
      
        const onLogin = useCallback(
          async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
      
            try {
              await authConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
              history.push('/');
            } catch (error) {
              console.log(error);
              alert('Something went wrong. Did you put your email and password?');
            }
          },
          [history],
        );

    if(user) {
        return <Redirect to='/' />;
    }

    return(
        <div id="container-login"> 
            <div id="box-login">

                <div id="logo">
                    <img src="logo.png"  alt="Logo Andimar" />
                </div>

                <form onSubmit={ onLogin }>
                    <div className="forms-input">
                        <div>
                            <p>Email</p>
                            <input type="email" name="email" placeholder="Insira seu email aqui" required></input>
                        </div>
                        <div className="input-pswwd">
                            <p>Senha</p>
                            <input type="password" name="password" placeholder="Insira sua senha aqui" required></input> 
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