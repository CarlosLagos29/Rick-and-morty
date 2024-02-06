import { useState } from "react";
import styles from "../estilos/SearchBar.modules.css?inline"

function SearchBar({ onSearch }) {

   const [Id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={styles}>
         <input className="barra" type='search' value={Id} onChange={handleChange} />
         <button className="agregar"  onClick={() => onSearch(Id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;