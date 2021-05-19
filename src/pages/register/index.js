import React, { useCallback } from 'react';
import { Link, Redirect, useHistory} from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import { authConfig } from '../../auth/config';

import './style.css';


const Register = () =>{

    const history = useHistory();
    const { user } = useAuth();

    const registerUser = useCallback(
        async (event) => {
          event.preventDefault();
    
          const { email, password } = event.target.elements;
          try {
            await authConfig
              .auth()
              .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
          } catch (error) {
            console.log(error);
            alert('Something went wrong. Is the email and password field filled?');
          }
        },
        [history],
      );

    if(user){
        return <Redirect to='/' />;
    }
    
    return (
        <div id="container-register"> 
            <div id="box-register">

                <div id="logo">
                    <img src="logo.png"  alt="Logo Andimar" />
                </div>

                <form onSubmit={ registerUser }> 
                    <div className="forms-register">
                        <div>
                            <p>Nome</p>
                            <input type="text" name="user.displayName" placeholder="Seu nome completo" required></input>
                        </div>
                        <div className="input-pswd">
                            <p>Email</p>
                            <input type="email" name="email" placeholder="Insira seu email aqui" required></input>
                        </div>
                        <div className="input-pswd">
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

 export default Register;