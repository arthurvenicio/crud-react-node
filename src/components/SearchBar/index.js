import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useSearch } from '../../context/Search';
import './style.css';

export const SearchBar = () => {
    const { search, setSearch } = useSearch();
    
    return(
        <div className="search-box">
            <button type="submit" classname="button-search"> <BiSearch /> </button> 
            <input type="search" className="search-bar" 
            placeholder="Pesquise um item aqui!"
            value={search}
            onChange={(ev) =>{
                setSearch(ev.target.value)
            }}
            ></input>  
        </div>

    );

}