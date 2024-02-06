const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        await Favorite.destroy({
            where: {
                id
            }
        })
        const allfavs = await Favorite.findAll();

        return res.status(200).json(allfavs);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { deleteFav }