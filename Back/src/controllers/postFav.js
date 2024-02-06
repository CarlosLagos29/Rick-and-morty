const { Favorite } = require("../DB_connection");


const postFav = async (req, res) => {
    const character = req.body;
    try {
        if (!character) {
            return res.status(401).send("Faltan datos");
        }

        const [favorite, created] = await Favorite.findOrCreate({
            where: { character }
        });

        const allfavs = await Favorite.findAll();

        return allfavs.map((char) => res.status(200).json(char));
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send(error.message);
    }
};

module.exports = { postFav }

