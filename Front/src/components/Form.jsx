import { useState, useEffect } from "react";
import validation from "../Funciones/validation"

import style from "../estilos/Form.module.css"

const Form = ({ login }) => {



    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({
            ...userData,
            [name]: value
        })

    };

    const handleSumbit = (event) => {
        event.preventDefault();
        setUserData({
            email: "",
            password: ""
        })
        login(userData);
    }

    useEffect(() => { setErrors(validation(userData)) }, [userData])


    return (
        <div className={style.formulario}>
        
 
            <img  src="https://steamuserimages-a.akamaihd.net/ugc/950718995351241361/D107C1962EEE0313BF4F524E5D2854D52701664F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="LogIn" />
            
            <form onSubmit={handleSumbit} className={style.email}>

                <label>Email: </label>
      
                <input type="text" value={userData.email} name="email" onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}

                <br />
                <label>Password: </label>

                <input type="password" value={userData.password} name="password" onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}

                <br />
                <button type="sumbit">Sumbit</button>

            </form>
        </div>
    )
}

export default Form;