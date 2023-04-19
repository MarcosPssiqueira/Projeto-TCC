const { DataTypes } = require("sequelize");
const db = require("../database/db");

const Pedido = db.define("pedido", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomeCliente: {
    type: DataTypes.STRING
  }, 
  nomeProduto: {
    type: DataTypes.STRING
  },
  sabor: {
    type: DataTypes.STRING
  },
  formaPagamento: {
    type: DataTypes.STRING
  },
  enderecoCliente: {
    type: DataTypes.STRING
  },
  observacoes: {
    type: DataTypes.STRING
  }
},{
  timestamps: false
});

Pedido.sync({ force: false });
module.exports = Pedido;