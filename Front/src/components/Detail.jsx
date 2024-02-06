import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../estilos/Detail.module.css"

const Detail = () => {

   const { id } = useParams()

   const [character, setcharacter] = useState({})

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setcharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setcharacter({});
   }, [id]);

   return (
      <div className={style.detalle}>
         <div>
         <h1>{character.name}</h1>
         <img src={character.image ? character.image : "Unknow"} alt={character.name} />
         </div>
         <div className={style.datos}>
         <h3>ID|{character.id ? character.id : "Unknow"}</h3>
         <h3>STATUS| {character.status ? character.status : "Unknow"}</h3>
         <h3>GENDER| {character.gender ? character.gender : "Unknow"}</h3>
         <h3>SPECIE| {character.species ? character.species : "Unknow"}</h3>
         <h3>ORIGIN| {character.origin?.name ? character.origin?.name : "Unknow"}</h3>
         <h3>LOCATION| {character.location?.name ? character.location?.name : "Unknow"}</h3>
         <h3>FIRST APPEARANCE| {character.episode?.[0] ? `${character.episode?.[0]}° episode` : "Unknow"}</h3>
         <h3>LAST APPEARANCE|  {character.episode?.[character.episode?.length - 1] ? `${character.episode?.[character.episode?.length - 1]}° episode` : "Unknow"}</h3>
         </div>
      </div>
   )
};

export default Detail;

