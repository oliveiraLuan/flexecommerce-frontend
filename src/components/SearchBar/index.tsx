import { useState } from 'react';
import './styles.css';

type Props = {
    onSearch : Function;
}

export default function SearchBar( {onSearch} : Props){

    const[searchText, setSearchText] = useState("");

    function handleOnSubmit(event: any){
        event.preventDefault();
        onSearch(searchText);
    }

    function handleOnChange(event: any){
        setSearchText(event.target.value);
    }

    function handleReset(){
        setSearchText("");
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleOnSubmit}>
            <button type="submit">🔎︎</button>
            <input  
            value={searchText}
            onChange={handleOnChange} 
            type="text" 
            placeholder="Nome do produto" />
            <button onClick={handleReset}>X</button>
        </form>
    );
}