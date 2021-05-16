import React, {useEffect, useState} from 'react';

import Elements from '../Elements';
import { useSearch } from '../../context/Search';
import { api } from '../../services/api';
import './style.css';

const HomePage = () => {

   const [data, setData] = useState();
   const { search } = useSearch();

   useEffect(() => {
    const params = {};
    if(search){
        params.name = search;
    }
    api.get("products", {params})
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
            });
    }, [search]);

    //if don't have product in db exec
    if (!data || data == null) return (
    <div id="container"> 
    <div className="title-box">
        <p>Itens disponíveis no estoque: </p>
    </div>
    
    <div className="box-alert">
        <div id="alert-box">
            <p>Não existem produtos cadatrados!</p>
        </div>
       
    </div>
    
    </div>); 

    //have product in db exec
    return(
       
        <div id="container"> 
            <div className="title-box">
                <p>Itens disponíveis no estoque: </p>
            </div>
            
            <div className="box-homepage">
               {data.map(({name, description, price, img, id, quantity}, index) => (
                <Elements id={id} index={index} name={name} 
                description={description} price={price} quantity={quantity} 
                img={img}/>))} 
            </div>
            
        </div>
    );
}

export default HomePage;