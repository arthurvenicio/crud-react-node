import React from 'react';
import { BiTrash, BiListCheck } from 'react-icons/bi';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';

import './style.css';

const Elements = ({name, quantity, description, price, img, id, index}) => {

    const history = useHistory();

    function deleteProduct(){
        api.delete(`product/${id}`).then((response) => alert(response.data) )
        .catch((error) => console.error);
    }

    return(
        <div index={index} className="boxElement">
            <div className="nomeProduto">
                {name}
            </div>
            <img className="imgProduct" src={img} alt={name}/>

            <div className="props">
                <p>{description}</p>
                <p>R$ {price}</p>
                <p>Quantidade em estoque: {quantity}</p>
            </div>

            <div className="buttons">
                <div className="button-1">
                    <button onClick={() => {
                        history.push(`/update/${id}`)
                    }}><BiListCheck /></button>
                </div>
                <div className="button-2">
                    <button onClick={deleteProduct} ><BiTrash /></button>
                </div>
            </div>
         </div>
    
    );
}

export default Elements;