const axios = require("axios");


const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-carloslagos29`)
        if (data.name) {
            return res.status(200).json(data);
        }
        return res.status(404).send("Not found");
    }

    catch (error) { return res.status(500).send(error.message) }
}


module.exports = { getCharById }