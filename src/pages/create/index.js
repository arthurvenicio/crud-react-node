import React, { useState } from 'react';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';


import './style.css';

const initValue = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    img:'',
}

const Create =  () => {

    const [values, setValues] = useState(initValue);
    const history = useHistory();


    function onChange(ev) {
        const { name, value } = ev.target;

        const newDate = { ...values, [name]: value};

        setValues(newDate);
    }

    function onSubmit(ev){
    ev.preventDefault();
    api.post('product', values)
      .then((response) => alert(response.data))
      .catch(function (error) {
        console.error(error);
      });
    history.push('/');
}
    return(

        <>
        <Header />
        <div id="container-update"> 
                <div className="box">
                <form onSubmit={onSubmit}>
                    <div className="forms-details">
                        <div className="input-name">
                            <p>Nome do Produto</p>
                            <input id="name" type="text" placeholder="Insira o nome do produto" name='name' onChange={onChange} maxlength="25" required></input>
                        </div>
                        <div className="input-name">
                            <p>Detalhes</p>
                            <input id="description" type="text" placeholder="Insira os detalhes do produto" name='description' onChange={onChange} maxlength="40" required></input> 
                        </div>
                        <div className="input-name">
                            <p>Preço</p>
                            <input id="price" type="number" step="0.01"  placeholder="Insira o preço do produto" name='price' onChange={onChange} required></input>
                        </div>
                        <div className="input-name">
                            <p>Quantidade</p>
                            <input id="quantity" type="number" step="0.01" placeholder="Insira a quantidade em estoque" name='quantity' onChange={onChange}  required></input> 
                        </div>
                        <div className="input-name">
                            <p>Imagem do Produto <h6>(Url da Imagem)</h6></p>
                        <input id="img" type="text" name='img' onChange={onChange} ></input> 
                        </div>

                        <div className="button-create">
                        <button type="submit">Adicionar</button>
                        </div>

                    </div>
                </form>
                </div>
        
        </div>
        </>
    );
}

export default Create;