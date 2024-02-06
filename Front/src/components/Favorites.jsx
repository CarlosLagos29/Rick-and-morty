import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, orderCards } from "../Redux/actions"
import Card from './Card';
import style from "../estilos/SearchBar.modules.css"

const Favorites = () => {

    const myFavorites = useSelector((state) => state.myFavorites);

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        setAux(true)
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={style}>
            <select className='agregar' onChange={handleOrder} >
                <option value="A">A-z    </option>
                <option value="D">Z-a    </option>
            </select>
            <select className= 'agregar'  onChange={handleFilter}>
                <option value="All">All characters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            {
                myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites;
