import './styles.css';
import searchButton from '../../assets/search-button.svg';
import { useState } from 'react';

type Props = {
    onSearch: Function;
}

export default function SearchBar({ onSearch } : Props) {

    const [text, setText] = useState("");

    function handleChange(event: any) {
        setText(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(text);
    }

    return (
        <div className="dsc-search-bar">
            <form className="dsc-form-search dsc-container" onSubmit={handleSubmit}>
                <input 
                    value={text}
                    type="text" 
                    placeholder="Nome do produto" 
                    onChange={handleChange}
                />
                <button className="dsc-button-search" type="submit">
                    <img src={searchButton} alt="icon" />
                </button>
            </form>
        </div>
    );
}