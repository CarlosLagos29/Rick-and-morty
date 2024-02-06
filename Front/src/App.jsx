import { useState, useEffect } from 'react';
import style from "./estilos/App.module.css"
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from "./components/About"
import Detail from "./components/Detail"
import Error from "./components/Error"
import Form from './components/Form';
import Favorites from './components/Favorites'

const App = () => {

   const navigate = useNavigate();
   const { pathname } = useLocation();

   const [characters, setcharacters] = useState([]);

   const [personaje, setPersonaje] = useState([])

   const [access, setAccess] = useState(false);

   const onSearch = async (id) => {
      if (!personaje.includes(parseInt(id))) {
         try {
            const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
               setcharacters((oldChars) => [...oldChars, data]);
            }
            else { window.alert('¡No hay personajes con este ID!'); }
            setPersonaje([...personaje, parseInt(id)])
         }
         catch (error) { console.log(error.message); }
      }
      else { window.alert('Ese personaje ya esta en pantalla') }
   };

   const randomCharat = async () => {
      const random = Math.floor(Math.random() * 826) + 1;
      if (!personaje.includes(random)) {
         try {
            const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${random}`)
            if (data.name) {
               setcharacters((oldChars) => [...oldChars, data]);
            }
            else { window.alert('¡No hay personajes con este ID!'); }
            setPersonaje([...personaje, random])
         }
         catch (error) { console.log(error.message); }
      }
      else { window.alert('Ese personaje ya esta en pantalla') }
   };

   const onClose = (Id) => {
      setcharacters(
         characters.filter((char) => {
            return char.id != Id;
         })
      )
      setPersonaje(
         personaje.filter((per) => {
            return per != Id;
         }))
   };

   const login = async (userData) => {
      const { email, password } = userData;
      try {
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate(('/home'));
      }
      catch (error) { console.log(error.message); }
   }

   const logOut = () => {
      window.location.reload()
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div>
         {pathname !== "/" && <Nav onSearch={onSearch} randomCharat={randomCharat} logOut={logOut} />}
         <Routes>
            <Route path='/favorites' element={<Favorites />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Form login={login} />} />
         </Routes>
      </div>
   );
}

export default App;
