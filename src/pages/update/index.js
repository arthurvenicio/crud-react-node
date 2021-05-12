import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';

import './style.css';

const Update =  () => {

    const { id } = useParams();
    const [data, setData] = useState();
    const [values, setValues] = useState();
    const history = useHistory();

    useEffect(() => {
        api.get(`product/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
                });
        }, [id]);

    function onChange(ev) {
            const { name, value } = ev.target;
            console.log()
            const newDate = { ...values, [name]: value};
    
            setValues(newDate);
        }
    
    function onUpdate(){
        api.put(`product/${id}`, values).then((response, event) =>  {
            event.preventDefault();

            alert(response.data);
            history.push('/');
        })
          .catch(function (error) { console.error(error);});
        }

    function onDelete(){
        api.delete(`product/${id}`).then((response) => alert(response.data) )
        .catch((error) => console.error);
    }

    if (!data) return null;

    return(
        <>
        <Header />
        <div id="container-update"> 
                <div className="box">
                    <form>
                    <div className="forms-details">
                        <div className="input-name">
                            <p>Nome do Produto</p>
                            <input id="name" type="text" placeholder={data.name}  name='name' onChange={onChange} maxlength="15" ></input>
                        </div>
                        <div className="input-name">
                            <p>Detalhes</p>
                            <input id="description" type="text" placeholder={data.description} name='description' onChange={onChange} maxlength="20"  ></input> 
                        </div>
                        <div className="input-name">
                            <p>Preço</p>
                            <input id="price" type="number" step="0.01" placeholder={data.price} name='price' onChange={onChange} ></input>
                        </div>
                        <div className="input-name">
                            <p>Quantidade</p>
                            <input id="quantity" type="number" step="0.01" placeholder={data.quantity} name='quantity' onChange={onChange}  ></input> 
                        </div>
                        <div className="input-name">
                            <p>Imagem do Produto</p>
                        <input id="img" type="text" placeholder={data.img} name='img' onChange={onChange} ></input> 
                        </div>
                                
                                <div className="button-update">
                                <button onClick={onUpdate}> Atualizar</button>
                                </div>
                                <div className="button-delete">
                                <button onClick={onDelete}> Deletar</button>
                                </div>
                            </div>
                        </form>
            </div>
        
        </div>
        </>
    );
}

export default Update;