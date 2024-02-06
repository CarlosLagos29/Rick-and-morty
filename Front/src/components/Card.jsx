import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addFav, removeFav } from '../Redux/actions';
import style from "../estilos/Card.module.css"

const Card = ({ id, name, status, gender, species, origin, image, onClose }) => {

   const dispatch = useDispatch();

   const allCharacters = useSelector((state) => state.allCharacters);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         dispatch(removeFav(id))
      }
      else {
         setIsFav(true);
         dispatch(addFav({ id, name, status, gender, species, origin, image }))
      }
   }

   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true);
         }
      });
   }, [allCharacters])


   return (
      <div className={style.carta}>
         <br />
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h3>Name: {name}</h3>
         </Link>
         <h3>Status: {status}</h3>
         <h3>Specie: {species}</h3>
         <h3>Gender: {gender}</h3>
         <h3>Origin: {origin}</h3>
         <img src={image} alt={name} />
         {
            isFav === true ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <br />
      </div>

   );
}
export default Card;
