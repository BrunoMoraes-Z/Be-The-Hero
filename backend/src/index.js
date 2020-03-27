const express = require('express');
const cors = require('cors');
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Query params: parametros nomeados na rota apoes "?" (filtros, paginação)
// Route Params: parametros utilizados para identificar recursos
// Request body: Corpo da requisição utilizado para criar ou alterar recursos

app.listen(3333);