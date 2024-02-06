const express = require('express');
const routes = express.Router();

const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { postUser } = require("../controllers/postUsers");
const { deleteFav } = require("../controllers/deleteFav");

routes.get("/character/:id", getCharById);
routes.post("/login", postUser );
routes.get("/login", login);
routes.post("/fav", postFav);
routes.delete("/fav/:id", deleteFav);

module.exports = { routes };


