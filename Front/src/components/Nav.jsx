import { Link } from 'react-router-dom';

import SearchBar from './SearchBar.jsx';
import style from "../estilos/Nav.module.css"

const Nav = ({ onSearch, randomCharat, logOut }) => {

    return (
        <nav className={style.Alineado}>
            <br />
            <Link to="/home">
            <SearchBar onSearch={onSearch} className={style.button} />
            </Link>
            <Link to="/home">
                <button onClick={() => randomCharat()} className={style.button}>Random</button>
            </Link>  
            <Link to="/about">
                <button className={style.button}>About</button>
            </Link>
             <Link to="/home">
                <button className={style.button}>Home</button>
            </Link> 
            <Link to="/favorites">
                <button className={style.button}>Favorites</button>
            </Link > 
            <Link to="">
                <button onClick={() => logOut()} className={style.button}>LogOut</button >
            </Link>
        </nav>
    );
}

export default Nav;