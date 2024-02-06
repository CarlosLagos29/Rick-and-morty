
const validation = (userData) => {
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "Email no valido";
    }

    if (userData.email === "") {
        errors.email = "Ingrese un Email";
    }

    if (userData.email.length > 35) {
        errors.email = "Email demasiado largo";
    }

    if (userData.password.length < 6) {
        errors.password = "Contraseña demasiado corta";
    }

    if (!/\d/.test(userData.password)) {
        errors.password = "Su contraseña debe contener numeros";
    }

    if (userData.password.length > 11) {
        errors.password = "Contraseña muy larga"
    }


    return errors;
};

export default validation