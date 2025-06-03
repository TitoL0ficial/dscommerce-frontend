import './styles.css';
import searchButton from '../../assets/search-button.svg';

export default function SearchBar() {
    return (
        <div className="dsc-search-bar">
            <form className="dsc-form-search dsc-container">
                <input type="text" placeholder="Nome do produto" />
                <button className="dsc-button-search" type="submit">
                <img src={searchButton} alt="icon" />
                </button>
            </form>
        </div>
    );
}