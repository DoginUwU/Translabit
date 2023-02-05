import { BiSearch } from "react-icons/bi";

import styles from "./styles.module.scss";

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Buscar" />
            <button><BiSearch /></button>
        </div>
    );
}

export default SearchBar;