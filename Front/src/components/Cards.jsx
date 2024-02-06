import Card from './Card';

import style from "../estilos/Cards.module.css"
const Cards = ({ characters, onClose }) => {
   return (
      <div className={style.cartas}>
         {

            characters.map(({ id, name, status, gender, species, origin, image }) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin?.name}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   );
}
export default Cards;