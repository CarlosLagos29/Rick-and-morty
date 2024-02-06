const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    const { email, password } = req.body
    try {
        if(!email|| !password){
            throw Error("Faltan datos");
        }
        const [user, created] = await User.findOrCreate({
            where: {email: email},
            defaults: {password: password}
        })

        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

module.exports = { postUser };