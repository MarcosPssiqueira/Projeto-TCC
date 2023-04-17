const express = require("express");
const app = express();
const cors = require("cors");

const pedidosController = require("./controllers/pedidos.controller");

app.use(cors());
app.use(express.json());

app.post("/pedido", pedidosController.post);

app.listen(3000, ()=>{
  console.log("Rodando na porta 3000");
})